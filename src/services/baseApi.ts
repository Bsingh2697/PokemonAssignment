import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon, Pokemons } from "./types";


export const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/',
    }),
    endpoints:(builder) => ({
        getAllPokemon: builder.query<Pokemons, void>({
            query:() => `pokemon/`
        }),
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
          }),
    })
})

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonApi

