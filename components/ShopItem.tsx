import { Clothing } from "../types";
import { View, Text } from "./Themed";
import React from 'react';
import { Image, StyleSheet } from 'react-native';


// const s = require('./style');

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    thumbnail: {
        width: 150,
        height: 150,
    },
    baseText: {
        textAlign: "left",
    },
    itemText: {
        fontWeight: "bold",
    }
});


export default function ShopItem({ item }: { item: Clothing }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.thumbnail}
                source={{
                    uri: item.image.url.toString(),
                }}

            />
            <Text style={styles.baseText}>
                <Text style={styles.itemText}>
                    {item.title}
                </Text>
                {'\n'}
                {`${getNameFromUserId(item.sellerId)}`}
            </Text>
        </View>
    )
}

/* TODO: Actually write the logic for this.. also, move to some utils file?
* Given some userId, return the user's name.
*/
function getNameFromUserId(id: Number): string {
    return "Jane Doe";
}