import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonStackList } from "./types";
import { ScreenKeys } from "./ScreenKeys";
import { PokemonsList } from "../screens/PokemonsList";
import { PokemonDetails } from "../screens/PokemonDetails";


const Stack = createNativeStackNavigator<PokemonStackList>()

export function PokemonStack() {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown : false
        }}>
            <Stack.Group>
                <Stack.Screen name={ScreenKeys.Pokemons} component={PokemonsList}/>
                <Stack.Screen name={ScreenKeys.Details} component={PokemonDetails}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}