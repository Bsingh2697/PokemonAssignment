import { StackScreenProps } from "@react-navigation/stack"
import { Text, View } from "native-base"
import { PokemonStackList } from "../navigation/types"
import { ScreenKeys } from "../navigation/ScreenKeys"

type Props = StackScreenProps<PokemonStackList, ScreenKeys.Details>

export const PokemonDetails = ({route}: Props) => {
    const { name } = route.params 

    return(<View>
        <Text>{name}</Text>
    </View>)
}