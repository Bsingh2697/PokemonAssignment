import { Card, View, Text } from "native-base"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import _ from 'lodash';

type Props = {
    url: string,
    name: string
    onPress: ()=>void 
}
export const PokemonCard = ({url, name, onPress} : Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <Card style={style.cardStyle}>
            <View style={style.cardView}>
                <View style={style.textView}>
                <Text fontFamily="primary" fontWeight="600" >{_.capitalize(name)}</Text>
                </View>
            </View>
        </Card>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    cardStyle : {
        borderRadius: 10, overflow: 'hidden', elevation: 2
    },
    cardView:{ backgroundColor: '#f0f0f0' },
    textView:{ paddingHorizontal: 20, paddingVertical: 10 }
})