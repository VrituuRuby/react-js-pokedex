import api from "@services/api";
import { ReactNode, useEffect, useState } from "react";
import { ListItem } from "./styles";
import { MdCatchingPokemon } from "react-icons/md";
import { motion } from "framer-motion";
interface PokemonCardProps {
  url: string;
  index: number;
  onOpenPokemonDetailsModal: (url: string) => void;
}
export interface PokemonData {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  species: {
    url: string;
  };
  weight: number;
  height: number;
}

export function PokemonCard(props: PokemonCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonData>(
    {} as PokemonData
  );

  useEffect(() => {
    setIsLoading(true);
    const loadPokemon = async () => {
      const res = await api.get(props.url);
      setPokemonData(res.data);
    };
    loadPokemon();
    setTimeout(() => setIsLoading(false), 800); //0.8s waiting images to load and display
  }, []);

  return (
    <ListItem
      transition={{
        type: "spring",
        damping: 100,
      }}
    >
      <button
        type="button"
        onClick={() => props.onOpenPokemonDetailsModal(props.url)}
      >
        <motion.img
          style={{ display: isLoading ? "none" : "block" }}
          src={pokemonData?.sprites?.other["official-artwork"]?.front_default}
          animate={{ opacity: isLoading ? 0 : 1 }}
          initial={{ opacity: 0 }}
        />
        <div
          className="loader"
          style={{ display: isLoading ? "block" : "none" }}
        >
          <MdCatchingPokemon />
        </div>
      </button>
      <strong className="index">
        Nº{String(props.index + 1).padStart(3, "0")}
      </strong>
      <strong className="name">{pokemonData?.name}</strong>
      <span>
        {pokemonData &&
          pokemonData?.types?.map(({ type }, index) => (
            <p key={index} className={type.name}>
              {type.name}
            </p>
          ))}
      </span>
    </ListItem>
  );
}
