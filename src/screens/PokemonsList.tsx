import { Text, View } from "native-base"
import { useGetAllPokemonQuery } from "../services/baseApi"
import { Image, StyleSheet, TextInput } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from "@shopify/flash-list"
import { SkeletonList } from "../components/pokemonCardSkeleton"
import { PokemonCard } from "../components/pokemonCard"
import { useState } from "react"
import { Pokemon } from "../services/types"
import { debounce } from "lodash"
import { ScreenKeys } from "../navigation/ScreenKeys";
import { PokemonStackList } from "../navigation/types";
import { images } from "../assets/images/images";

export interface Props {
    navigation: StackNavigationProp<
      PokemonStackList,
      ScreenKeys.Pokemons
    >;
  }

export const PokemonsList = ({navigation}:Props) => {
    const [page, setPage] = useState(0)
    const { data, error, isLoading, isFetching } = useGetAllPokemonQuery(page)
    const {count, next, results = []} = data || {}
console.log("DATA :L", data)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState<Array<Pokemon>>([])

    const handleSearch = debounce((searchTerm) => {
        const filteredResults = results.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(filteredResults);
    }, 300);

    const pressPokemon = (name :string) => {
        navigation.navigate(ScreenKeys.Details, {name})
    }

    if(isLoading){
        return (
            <SkeletonList/>
        )
    }

    return(
        <View style={style.listView}>
                <View style={style.headStyle}>
                    <Image source ={images.logo} style={style.logo} testID="pokemon-logo"/>
                    <Text fontFamily="primary" fontWeight="600" fontSize="2xl" marginLeft={4} paddingBottom={8}>POKEMON</Text>
                </View>
            <View marginX="5" marginBottom="4">
                <TextInput onChangeText={(text) => {
                    setSearch(text);
                    handleSearch(text);
                }} placeholder="Find my pokemon!" style={style.textInputStyle}/>
            </View>

            {search.length > 0 ? <FlashList
                    data={searchResult}
                    estimatedItemSize={200}
                    renderItem={({item})=><PokemonCard onPress= {()=>pressPokemon(item.name)} url={item.url} name={item.name}/>}
                /> : 
                <FlashList
                testID="pokemon-list"
                    data={results}
                    estimatedItemSize={200}
                    renderItem={({item})=><PokemonCard onPress= {()=>pressPokemon(item.name)} url={item.url} name={item.name}/>}
                    onEndReached={()=>setPage(page+10)}
                    ListFooterComponent={isFetching ? <SkeletonList showHeader={false}/> : null}
                />
            }
        </View>
    )
}

const style = StyleSheet.create({
    listView:{
        flex:1,
        paddingTop:70,
        backgroundColor:'#ffffff'
    },
    textInputStyle: {borderBottomWidth:1, borderColor:'#ECECEC', fontSize:20},
    logo: {
        width: 100, 
        height: 100, 
      },
      headStyle:{
        flexDirection:'row',
        alignItems:'baseline',
        marginBottom:10
      }
})