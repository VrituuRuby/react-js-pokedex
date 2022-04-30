import { Header } from './components/Header';
import { PokemonList } from './components/PokemonList';
import './styles/GlobalStyles.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <Header />
      <PokemonList />
    </>
  )
}

