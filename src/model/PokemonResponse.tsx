import { Pokemon } from "./Pokemon"

export interface PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<Pokemon>; 
}
