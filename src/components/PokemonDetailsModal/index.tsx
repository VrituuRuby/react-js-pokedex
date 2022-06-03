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
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h2>Height</h2>
                                        <h3>{pokemonDetailsData?.height/10}m</h3>
                                    </td>
                                    <td>
                                        <h2>Weight</h2>
                                        <h3>{pokemonDetailsData?.weight/10}kg</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>Category</h2>
                                        <h3>Seed</h3>
                                    </td>
                                    <td>
                                        <h2>Abilities</h2>
                                        <h3>16kg</h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Types</h2>
                        <span className="types">
                            {pokemonDetailsData?.types?.map(({type}, index) => (<p key={index}className={type.name}>{type.name}</p>))}
                        </span>
                        <h2>Weaknesses</h2>
                        <span className="types">
                        </span>
                    </div>
                </div> 
            </Container>
        </Modal>
    )
}
