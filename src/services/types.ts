
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