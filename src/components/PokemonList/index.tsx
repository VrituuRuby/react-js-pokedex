import { Container } from "./styles"
import { PokemonCard } from "../PokemonCard"


export function PokemonList(){
    
    const id = [...Array(20).keys()]
    return(
        <Container>
            {   
                id.map(pokemon => (
                    <PokemonCard key={pokemon + 1} index={pokemon + 1}/>
                ))
            }
        </Container>
    )
}