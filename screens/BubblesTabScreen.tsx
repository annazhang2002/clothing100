import { StyleSheet, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import BubbleComp from '../components/BubbleComp';
import { testBubble } from '../constants/TestObjects';
import { Dispatch } from 'redux';
import { Bubble } from '../types';
import { createBubble, fetchBubbles, addUserToBubble } from '../redux/actions/bubbles';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

function BubblesTabScreen(props: any) {

    // TODO: this is running when the props update i think? we should try putting it into a higher class
    useEffect(() => {
        props.fetchBubbles('a1')
        // console.log(props.bubblesIds)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Bubbles</Text>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.createBubble(testBubble)}
                style={styles.addButton}
            >
                <FontAwesomeIcon icon={faPlus} color={'white'} size={20} />
            </TouchableOpacity>
            {/* <Button title="create bubble" onPress={() => props.createBubble(testBubble)} /> */}
            {/* <Button title="add user to bubble" onPress={() => props.addUserToBubble(props.bubblesIds[1], 'w1')} /> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                <FlatList
                    data={props.bubblesIds}
                    // renderItem={({ item }) => (<Text>{item}</Text>)}
                    renderItem={({ item }) => (<BubbleComp item={props.bubblesById[item.toString()]} />)}
                    keyExtractor={item => `${item}`}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
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
    addButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    }
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
        addUserToBubble: (bubbleId: String, userId: String) => {
            dispatch(addUserToBubble(bubbleId, userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BubblesTabScreen)