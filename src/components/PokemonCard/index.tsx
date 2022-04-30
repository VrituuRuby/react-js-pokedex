import api from "@services/api";
import { useEffect, useState } from "react";
import { ListItem } from "./styles";
import {MdCatchingPokemon} from 'react-icons/md'
interface PokemonCardProps{
    url: string,
    index: number,
    onOpenPokemonDetailsModal: (url: string) => void;
}
export interface PokemonData{
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
    }[],
    species: {
        url: string
    }
}

export function PokemonCard(props: PokemonCardProps){
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState<PokemonData>({} as PokemonData);

    useEffect(() => {
        setIsLoading(true)
        const loadPokemon = async () => {
            const res = await api.get(props.url)
            setPokemonData(res.data)
        }
        loadPokemon()
        setIsLoading(false)
    }, [])

    return (
        <ListItem
            transition={{
                type: 'spring',
                damping: 100,
            }}
        >
            {isLoading && <div className="loader">
                    <MdCatchingPokemon />
                </div>
            }
            <button type='button' onClick={()=>props.onOpenPokemonDetailsModal(props.url)}>
                <img src={pokemonData?.sprites?.other["official-artwork"]?.front_default}/>
            </button>
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