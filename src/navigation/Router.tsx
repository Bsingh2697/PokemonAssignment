import { NavigationContainer } from "@react-navigation/native";
import { PokemonStack } from "./PokemonStack";

function Router() {
    return (
        <NavigationContainer>
            <PokemonStack/>
        </NavigationContainer>
    )
}

export {Router}