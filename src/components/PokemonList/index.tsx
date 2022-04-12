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

    async function loadPokemon(){
        await api.get(`pokemon?limit=${page * 20}`)
        .then(res => {
            setPokemonCatalog(res.data.results)
        })
    }

    useEffect(()=> {
        loadPokemon();
    }, [page])

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)){
                console.log('observado', page)
                setPage(currentPageInsideState => currentPageInsideState + 1)
            }
        });
        intersectionObserver.observe(document.getElementById('page-end-tracker')!)
    }, [])

    return(
        <>
            <Container>
                {/* <h1 id='fix'>{`Página atual: ${page}`}</h1> */}
                {   
                    pokemonCatalog.map((pokemon, index) => (
                        <PokemonCard key={index} url={pokemon.url} index={index} />
                    ))    
                }
            </Container>
            <p id="page-end-tracker"/>
        </>
        
    )
}

