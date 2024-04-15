import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonDetails, Pokemons } from "./types";
import config from 'react-native-config';


export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: config.BASE_URL
    }),
    endpoints:(builder) => ({
        getAllPokemon: builder.query<Pokemons, number>({
            query:(offset : number) => `pokemon/?offset=${offset}&limit=10`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
              },
            merge: (currentCache, newItems) => {
                currentCache.results.push(...newItems.results)
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
              },
        }),
        getPokemonByName: builder.query<PokemonDetails, string>({
            query: (name) => `pokemon/${name}`,
          }),
    })
})

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonApi

