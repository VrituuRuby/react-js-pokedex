import api from "@services/api";
import { useEffect, useState } from "react"

import { PokemonCard } from "../PokemonCard"
import { PokemonDetailsModal } from "../PokemonDetailsModal";
import { PokemonData } from "../PokemonCard";

import { Container } from "./styles"

interface PokemonCatalogData{    
    url: string,
}

export function PokemonList(){
    const [isPokemonDetailsModalOpen, setIsPokemonDetailsModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pokemonCatalog, setPokemonCatalog] = useState<PokemonCatalogData[]>([])
    const [pokemonDetailsData, setPokemonDetailsData] = useState({} as PokemonData)

    async function handleOpenPokemonDetailsModal(url: string){
        await api.get(url)
        .then(res => setPokemonDetailsData(res.data))
        setIsPokemonDetailsModalOpen(true)
    }

    function handleClosePokemonDetailsModal(){
        setIsPokemonDetailsModalOpen(false)
    }


    async function loadPokemon(){
        await api.get(`pokemon?limit=${page * 12}`)
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
                setPage(currentPageInsideState => currentPageInsideState + 1)
            }
        });
        intersectionObserver.observe(document.getElementById('page-end-tracker')!)
    }, [])

    return(
        <>
            <Container>
                <PokemonDetailsModal 
                    isPokemonDetailsModalOpen={isPokemonDetailsModalOpen}
                    handleClosePokemonDetailsModal={handleClosePokemonDetailsModal}
                    pokemonDetailsData={pokemonDetailsData}
                />
                {   
                    pokemonCatalog.map((pokemon, index) => (
                        <PokemonCard 
                            key={index} 
                            url={pokemon.url} 
                            index={index} 
                            onOpenPokemonDetailsModal={() => handleOpenPokemonDetailsModal(pokemon.url)}
                        />
                    ))    
                }
            </Container>
            <p id="page-end-tracker"/>
        </>
        
    )
}

