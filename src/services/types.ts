import { Dictionary } from "lodash"

export  type Pokemon = {
    name: string,
    url: string
}

export type Pokemons = {
    count: number,
    next: string,
    previous: string,
    results: Array<Pokemon>
}

export type Ability = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  };

export type Move = {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  };

export type PokeType = {
    slot: number,
    type: {
        name?: string,
        url?: string
    }
}

export type Stats = {
    base_stat:80,
         effort:number,
         stat:{
            name:string,
            url:string
         }
}

export type Cries = {
    latest : string
}

export type PokemonDetails = {
    sprites?: Record<string, string>,
    abilities?: Array<Ability>,
    height?: number,
    weight?: number,
    moves?:Array<Move>
    stats?: Array<Stats>
    types?: Array<PokeType>
    cries?: Cries
}