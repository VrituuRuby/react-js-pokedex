import api from "@services/api";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { PokemonData } from "../PokemonCard";
import { Container } from "./styles";

interface PokemonDetailsModalProps{
    isPokemonDetailsModalOpen: boolean,
    handleClosePokemonDetailsModal: () => void,
    pokemonDetailsData: PokemonData,
}

interface flavorTextData {
    flavor_text_entries: {
        flavor_text: string,
    }[]
}

export function PokemonDetailsModal({isPokemonDetailsModalOpen,
    handleClosePokemonDetailsModal, pokemonDetailsData}: PokemonDetailsModalProps){ 
    const [flavorText, setFlavorText] = useState<flavorTextData | undefined>(undefined);
    
    useEffect(()=> {
        if(!isPokemonDetailsModalOpen) return
        const fetch = async () => {
            const res = await api.get(pokemonDetailsData?.species?.url)
            setFlavorText(res.data)
        }
        fetch()
    }, [pokemonDetailsData, isPokemonDetailsModalOpen])

    return !flavorText ? null :(
        <Modal
            isOpen={isPokemonDetailsModalOpen}
            onRequestClose={handleClosePokemonDetailsModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <h1>{pokemonDetailsData.name}</h1>
                <img src={pokemonDetailsData?.sprites?.other["official-artwork"]?.front_default} alt="" />
                <p>{flavorText?.flavor_text_entries[0]?.flavor_text}</p>
            </Container>
        </Modal>
    )
}
