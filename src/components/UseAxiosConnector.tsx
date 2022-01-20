import axios from "axios";

import { PokemonResponse } from "../model/PokemonResponse";

export const UseAxiosConnector = (callback: any): void => {
    axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=1')
        .then(response => {
            callback(response.data.results)
        })
}
