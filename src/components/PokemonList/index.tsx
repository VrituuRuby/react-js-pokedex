import api from "@services/api";
import { useEffect, useState } from "react"
import { PokemonCard } from "../PokemonCard"

import { Container } from "./styles"

interface PokemonCatalogData{    
    url: string,
}


export function PokemonList(){
    const [page, setPage] = useState(1);
    const [pokemonCatalog, setPokemonCatalog] = useState<PokemonCatalogData[]>([])

    useEffect(()=>{
        api.get(`pokemon?limit=${page * 20}`)
        .then(res => {
            setPokemonCatalog(res.data.results)
            console.log(pokemonCatalog)
        })
    }, [page])

    if (!pokemonCatalog) return null;

    return(
        <Container>
            {   
                pokemonCatalog.map((pokemon, index) => (
                    <PokemonCard key={index} url={pokemon.url} index={index} />
                ))
            }
            <button 
                type="button"
                onClick={() => {setPage(page+1)}}
            >
                Next {page}
            </button>
        </Container>
    )
}