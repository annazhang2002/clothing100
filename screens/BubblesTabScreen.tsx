import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import BubbleComp from '../components/BubbleComp';
import { testBubble } from '../constants/TestObjects';
import { Dispatch } from 'redux';
import { Bubble } from '../types';
import { createBubble, fetchBubbles } from '../redux/actions/bubbles';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function BubblesTabScreen(props: any) {

    // TODO: this is running when the props update i think? we should try putting it into a higher class
    useEffect(() => {
        props.fetchBubbles('a1')
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bubbles</Text>
            <Button title="create bubble" onPress={() => props.createBubble(testBubble)} />
            {props.bubblesIds.map((bubbleId: String) => {
                return (
                    <BubbleComp item={props.bubblesById[bubbleId.toString()]} />
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

const mapStateToProps = (state: any) => ({
    bubblesById: state.bubbles.bubblesById,
    bubblesIds: state.bubbles.bubblesIds,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        // dispatching plain actions
        createBubble: (newBubble: Bubble) => {
            dispatch(createBubble(newBubble))
        },
        fetchBubbles: (userId: String) => {
            dispatch(fetchBubbles(userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BubblesTabScreen)