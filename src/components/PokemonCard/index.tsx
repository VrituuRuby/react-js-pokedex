import api from "@services/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ListItem } from "./styles";
import {MdCatchingPokemon} from "react-icons/md"

interface PokemonCardProps{
    url: string,
    index: number,
}

interface PokemonData{
    name: string,
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    },
    types: {
        type: {
            name: string,
        }
    }[]
}

export function PokemonCard(props: PokemonCardProps){
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState<PokemonData>({} as PokemonData);

    async function loadPokemonData(){
        setIsLoading(true);
        await api.get(props.url)
        .then(res => setPokemonData(res.data))
    }

    useEffect(() => {
        loadPokemonData();
        setIsLoading(false);
    }, [])

    return (
        <ListItem
            transition={{
                type: 'spring',
                damping: 100,
            }}
        >
            {
                isLoading? (<MdCatchingPokemon />) :(
                    <>
                        <img src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonData?.name} />
                        <strong className="index">Nº {props.index+1}</strong>
                        <strong className="name">{pokemonData?.name}</strong>
                        <span>
                            {
                            pokemonData && pokemonData?.types?.map(({ type}, index) => (<p key={index}className={type.name}>{type.name}</p>))
                            }
                        </span>
                    </>
                )
            }

                
        </ListItem>
    )
}