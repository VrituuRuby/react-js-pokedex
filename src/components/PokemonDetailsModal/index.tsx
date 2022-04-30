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

export function PokemonDetailsModal({isPokemonDetailsModalOpen,
    handleClosePokemonDetailsModal, pokemonDetailsData}: PokemonDetailsModalProps){ 
    const [flavorText, setFlavorText] = useState<string | undefined>('');
    
    useEffect(()=> {
        if(!isPokemonDetailsModalOpen) return
        const fetch = async () => {
            const res = await api.get(pokemonDetailsData?.species?.url)
            let englishFlavorText = res.data.flavor_text_entries.find((element: any) => element.language.name === 'en').flavor_text;
            englishFlavorText = englishFlavorText.replace('\n','').replace('\f',' ')

            setFlavorText(englishFlavorText)
            console.log(englishFlavorText)
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
                <h1>{pokemonDetailsData?.name}</h1>
                <div className="details">
                    <img src={pokemonDetailsData?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonDetailsData?.name} />
                    <div className="flavor-text-and-table">
                        <p>{flavorText}</p>
                    </div>
                </div> 
            </Container>
        </Modal>
    )
}
