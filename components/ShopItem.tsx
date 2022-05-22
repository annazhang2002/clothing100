import { Clothing } from "../types";
import { View, Text } from "./Themed";

// const s = require('./style');

export default function ShopItem({ item }: { item: Clothing }) {
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>hello</Text>
        </View>
    )
}