import { StyleSheet } from 'react-native';

import { View, Text } from '../components/Themed';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { Dispatch } from 'redux';
import { fetchUser } from '../redux/actions/user';
import { connect } from 'react-redux';

function LoginScreen(props: any, ) {
    const yaleCASLoginUrl = 'https://secure.its.yale.edu/cas/login?'
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
                props.fetchUser(ticket)
            }
            props.navigation.navigate('Root')
        }
    };

    return (
        // <View style={styles.container}>
        //     <Text>hello</Text>
        <WebView
            // source={{ uri: 'https://secure.its.yale.edu/cas/login' }}
            source={{ uri: yaleCASLoginUrl + 'service=' + redirectUrl }}
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