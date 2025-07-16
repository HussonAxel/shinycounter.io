 interface CurrentPokemonLeftProps {
  pokemonJapaneseName: string;
  pokemonDefaultName: string;
  pokemonID: number;
}

import {Button} from "../ui/button";

import { useState } from "react";
export default function CurrentPokemonLeft({ pokemonJapaneseName, pokemonDefaultName, pokemonID }: CurrentPokemonLeftProps) {
  const [isShiny, setIsShiny] = useState(false);
  const handleClick = () => {
    setIsShiny(!isShiny);
  }
  return (
    <div className="h-full bg-gray-100 w-2/5 flex flex-col items-center justify-center p-6">
      <h2 className="text-7xl font-semibold text-[#1A1A1A]/33 mb-4">
        {pokemonJapaneseName}
      </h2>
      <h3 className="text-5xl font-bold capitalize text-[#1A1A1A] mb-2">
        {pokemonDefaultName}
      </h3>

      <img
        src={`/assets/static/sprites/${isShiny ? 'shiny' : 'base'}/${pokemonID}.webp`}
        alt={pokemonDefaultName}
        className="w-2/4 h-auto my-8"
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onMouseDown={handleClick}
          className="mt-4 bg-white text-black uppercase font-semibold ring ring-gray-200  transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300"
        >
          {isShiny ? 'Normal' : 'Shiny'} Pokémon
        </Button>
        <Button
          className="mt-4 bg-white text-black uppercase font-semibold ring ring-gray-200 transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300"
        >
          Start Hunt
        </Button>
      </div>
    </div>
  )
}
