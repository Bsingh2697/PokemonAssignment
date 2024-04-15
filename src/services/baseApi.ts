import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon, Pokemons } from "./types";


export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/',
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
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
          }),
    })
})

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonApi

