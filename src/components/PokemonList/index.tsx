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

    function loadPokemon(){
        api.get(`pokemon?limit=${page * 20}`)
        .then(res => {
            setPokemonCatalog(res.data.results)
            console.log(pokemonCatalog)
        })
    }

    function handleScrolling(e: any){
        let windowInnerHeight = window.innerHeight;
        let scrollTop = e.target.documentElement.scrollTop;
        let scrollHeight = e.target.documentElement.scrollHeight;

        if (windowInnerHeight + scrollTop + 1 >= scrollHeight) setPage(page +1)
    }

    useEffect(()=>{
        loadPokemon();
        window.addEventListener('scroll', handleScrolling)
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