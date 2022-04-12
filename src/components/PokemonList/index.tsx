import api from "@services/api";
import { useEffect, useState } from "react"
import { PokemonCard } from "../PokemonCard"

import { Container } from "./styles"

interface PokemonCatalogData{    
    url: string,
}


export function PokemonList(){
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pokemonCatalog, setPokemonCatalog] = useState<PokemonCatalogData[]>([])

    async function loadPokemon(){
        setIsLoading(true);
        await api.get(`pokemon?limit=${page * 20}`)
        .then(res => {
            setPokemonCatalog(res.data.results)
            console.log(pokemonCatalog)
        })
        setIsLoading(false);
    }

    useEffect(()=>{
        loadPokemon();
    }, [page])

    return(
        <Container>
            {   
                isLoading ? null :
                (pokemonCatalog.map((pokemon, index) => (
                    <PokemonCard key={index} url={pokemon.url} index={index} />
                )))
            }
            <p id='page-end-tracker'/>
        </Container>
    )
}