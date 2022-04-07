import api from "@services/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ListItem } from "./styles";

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
    const [pokemonData, setPokemonData] = useState<PokemonData>({} as PokemonData);

    useEffect(() => {
        api.get(props.url)
        .then(res => setPokemonData(res.data))

    }, [])

    if (!pokemonData) return null;

    return (
        <ListItem
            transition={{
                // delay: 0.1 * props.index,
                type: 'spring',
                damping: 100,
            }}
        >
                <img src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} alt="Bulbasaur" />
                <strong className="index">Nº {props.index+1}</strong>
                <strong className="name">{pokemonData?.name}</strong>
                <span>
                    {
                    pokemonData && pokemonData?.types?.map(({ type}, index) => (<p key={index}className={type.name}>{type.name}</p>))
                    }
                </span>
        </ListItem>
    )
}