import { ScreenKeys } from "./ScreenKeys";

export type PokemonStackList = {
    [ScreenKeys.Pokemons] : undefined;
    [ScreenKeys.Details] : {name: string};
  };