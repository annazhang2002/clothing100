import { Bubble } from "../types";
import { View, Text } from "./Themed";
import { StyleSheet } from 'react-native';

export default function BubbleComp({ item }: { item: Bubble }) {
    return (
        <View style={[styles.circle, { backgroundColor: item.color }]}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        height: 120,
        width: 120,
        borderRadius: 75,
        margin: 20,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
    }
});