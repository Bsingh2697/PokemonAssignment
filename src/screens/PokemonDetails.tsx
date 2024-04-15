import { StackScreenProps } from "@react-navigation/stack"
import { ScrollView, Text, View } from "native-base"
import { PokemonStackList } from "../navigation/types"
import { ScreenKeys } from "../navigation/ScreenKeys"
import { useGetPokemonByNameQuery } from "../services/baseApi"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import _ from "lodash"
import TrackPlayer from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlashList } from "@shopify/flash-list"
import { DetailsSkeleton } from "../components/DetailsSkeleton"

type Props = StackScreenProps<PokemonStackList, ScreenKeys.Details>

export const PokemonDetails = ({route, navigation}: Props) => {
    const { name } = route.params 
    const { data, error, isLoading } = useGetPokemonByNameQuery(name)

    const start = async (track: string) => {
        await TrackPlayer.setupPlayer({});
        await TrackPlayer.add({
            id: 'pokeId',
            url: track
        });
        await TrackPlayer.play();
    };

    const {sprites, cries, stats, abilities, height, weight, moves, types} = data || {}
    const {front_default : frontDefault} = sprites || {}
    const {latest} = cries || {}

    if(isLoading){
        return (
            <DetailsSkeleton/>
        )
    }

    return(<>
        <View style={styles.header}>
        <Icon
        onPress={()=>navigation.goBack()}
            name="chevron-left"
            size={20}
            style={styles.backIcon}
        />
    </View>
    <ScrollView contentContainerStyle={styles.detailsView}>
    
        <View>
        {frontDefault ? <View style={styles.imageView}><Image style={styles.imageStyle} source={{uri : frontDefault}}/></View> : null}
        <View style={styles.heading}>
            <Text fontFamily="primary" fontWeight="600" fontSize="2xl" marginRight="3">{_.capitalize(name)}</Text>
            {latest ? <TouchableOpacity onPress={() => start(latest)}>
            <Icon
                name="microphone"
                size={24}
            />
            </TouchableOpacity> : null}
        </View>
        <View alignItems={'center'} justifyContent={'center'} flex={1} minHeight={60}>
            <FlashList
            horizontal={true}
            data={types}
            renderItem={({item})=><View style={[styles.capsule, {backgroundColor:`#FF7B00`}]}>
                    <Text fontFamily="secondary" fontWeight="600" fontSize="sm" color={'#fff'}>{_.capitalize(item?.type?.name)}</Text>
                </View>}
            />
        </View>
        <View style={styles.heightWeightStyle}>
            <View flexDirection={'row'}>
            <Text fontFamily="primary" fontWeight="600" fontSize="xl" color={'#71797E'}>Height : </Text>
            <Text fontFamily="secondary" fontWeight="600" fontSize="xl" color={'#818589'}>{height}m</Text>
            </View>
            <View flexDirection={'row'}>
            <Text fontFamily="primary" fontWeight="600" fontSize="xl" color={'#71797E'}>Weight : </Text>
            <Text fontFamily="secondary" fontWeight="600" fontSize="xl" color={'#818589'}>{weight}kg</Text>
            </View>
        </View>
        <View>
            <View flexDirection={'row'} marginBottom={3}>
            <Text style={styles.textStyle} fontFamily="primary" fontWeight="600" fontSize="md">Stats</Text>
            <Text marginLeft={2} fontFamily="primary" fontWeight="600" fontSize="md">📈</Text>
            </View >
            <View 
                    minHeight={60}
                    >
                <FlashList
                    data={stats}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.capusuleList}
                    horizontal={true}
                    renderItem={({item})=><View style={[styles.capsule, {backgroundColor:`#FEE715`}]}>
                        <Text fontFamily="secondary" fontWeight="600" fontSize="sm" color={'#101820'}>{_.capitalize(item?.stat?.name)}</Text>
                        <View style={{borderRadius:10, backgroundColor:'#101820', padding:3, marginStart:5, alignItems:'center', justifyContent:'center'}}>
                        <Text fontFamily="secondary" fontWeight="600" fontSize="10" color={'#FEE715'}> {item?.base_stat}</Text>
                            </View>
                    </View>}
                />
                </View>
        </View>
        <View>
            <View flexDirection={'row'}>
                <Text style={styles.textStyle} fontFamily="primary" fontWeight="600" fontSize="md" marginBottom={3}>Abilities</Text>
                <Text marginLeft={2} fontFamily="primary" fontWeight="600" fontSize="md" marginBottom={3}>⚡</Text>
            </View>
            <View
                    minHeight={60}
                    >
            <FlashList
                estimatedItemSize={200}
                contentContainerStyle={styles.capusuleList}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={abilities}
                renderItem={({item})=><View style={[styles.capsule, item?.is_hidden ? {backgroundColor:`#36454F`} : { backgroundColor:`#8A9A5B`}]}>
                    <Text fontFamily="secondary" fontWeight="600" fontSize="sm" color={'#ffffff'}>{_.capitalize(item?.ability?.name)}</Text>
                </View>}
            />
            </View>
        </View>
        <View>
            <View flexDirection={'row'}>
                <Text style={styles.textStyle} fontFamily="primary" fontWeight="600" fontSize="md" marginBottom={3}>Moves</Text>
                <Text marginLeft={2} fontFamily="primary" fontWeight="600" fontSize="md" marginBottom={3}>🥷🏻</Text>
            </View>
            <View 
                    minHeight={60}
>
            <FlashList
                estimatedItemSize={47}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.capusuleList}
                horizontal={true}
                data={moves}
                renderItem={({item})=><View style={[styles.capsule, {backgroundColor:'#C5001A'}]}>
                    <Text fontFamily="secondary" fontWeight="600" fontSize="sm" color={'#FDF6F6'}>{_.capitalize(item?.move?.name)}</Text>
                </View>}
            />
            </View>
        </View>
        </View>
    </ScrollView></>)
}

const styles = StyleSheet.create({
    capusuleList:{
        paddingLeft:16
        },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1, 
        paddingHorizontal: 16,
        paddingTop: 16, 
        backgroundColor:'#ffffff',
        width:'100%',
        height:90,
        borderColor:`#ECECEC`,
        borderBottomWidth:1
    },
    backIcon: {
        marginTop:40
    },
    detailsView:{
        flexGrow:1,
        marginTop:80,
        paddingBottom:100,
        backgroundColor:'#ffffff'
    },
    imageView:{
        alignSelf:'center'
    },
    imageStyle : {
        height:200,
        width:200
    },
    heading:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:20
    },
    heightWeightStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        paddingHorizontal:16
    },
    capsule:{
        alignSelf:'flex-start',    
        flexDirection:'row',
        paddingHorizontal:12,
        paddingVertical:8,
        marginBottom:10,
        borderRadius:10,
        marginEnd:8
    },
    textStyle:{
        textDecorationLine:'underline',
        marginStart:16
    }
})