import { StyleSheet } from 'react-native';

import { View, Text } from '../components/Themed';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { Dispatch } from 'redux';
import { fetchUser } from '../redux/actions/user';
import { connect } from 'react-redux';

function LoginScreen(props: any, ) {
    const yaleCASUrl = 'https://secure.its.yale.edu/cas/'
    const yaleCASLogin = 'login?'
    const yaleCASValidate = 'serviceValidate?'
    const redirectUrl = 'https://auth.expo.io/@annazhang2002/clothing100app'

    const parseTicketFromUrl = (url: String) => {
        const ticket = url.substring((redirectUrl + '?ticket=').length)
        console.log("ticket is " + ticket)
        return ticket
    }

    const onNavigationStateChange = (navigationState: WebViewNavigation) => {
        const url = navigationState.url;

        console.log(url)
        if (url.indexOf(redirectUrl) == 0) {
            console.log("successful login!")
            const ticket = parseTicketFromUrl(url)
            if (!props.id) {
                // props.fetchUser(ticket)
            }
            console.log("validate with ticket: ", ticket)
            console.log("login here", yaleCASUrl + yaleCASValidate + 'service=' + redirectUrl + '&ticket=' + ticket)

            var CASAuthentication = require('node-cas-authentication');

            var app = require('express')();
            var session = require('express-session');

            // Set up an Express session, which is required for CASAuthentication.
            app.use(session({
                secret: 'super secret key',
                resave: false,
                saveUninitialized: true
            }));

            var cas = new CASAuthentication({
                cas_url: yaleCASUrl + yaleCASValidate + 'service=' + redirectUrl + '&ticket=' + ticket,
                service_url: redirectUrl,
                cas_version: '2.0',
                renew: false,
                is_dev_mode: false,
                dev_mode_user: '',
                dev_mode_info: {},
                session_name: 'cas_user',
                session_info: 'cas_userinfo',
                destroy_session: false,
                return_to: redirectUrl
            });

            app.get('/api/user', cas.block, function (req: any, res: any) {
                res.json({ cas_user: req.session[cas.session_name] });
            });
            // fetch(yaleCASUrl + yaleCASValidate + 'service=' + redirectUrl + '&ticket=' + ticket)
            //     .then((response) => {
            //         console.log('RESPONSE', response)
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });


            // props.navigation.navigate('Root')
        }
    };

    return (
        // <View style={styles.container}>
        //     <Text>hello</Text>
        <WebView
            // source={{ uri: 'https://secure.its.yale.edu/cas/login' }}
            source={{ uri: yaleCASUrl + yaleCASLogin + 'service=' + redirectUrl }}
            onNavigationStateChange={onNavigationStateChange}
        />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state: any) => ({
    user: state.user,
    id: state.user.userId,
    error: state.user.error
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchUser: (id: String) => {
            dispatch(fetchUser(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)