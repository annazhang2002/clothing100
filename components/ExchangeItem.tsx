import { Clothing, User } from "../types";
import { View, Text } from "./Themed";


export default function ExchangeItem(props: {item: Clothing; person: User;}) {
    return (
        <View>
            <Text>{props.person.firstName}</Text>
            <Text>would like to exchange</Text>
            <Text>{props.item.title}</Text>
        </View>
    )
}

// React native images https://reactnative.dev/docs/image
