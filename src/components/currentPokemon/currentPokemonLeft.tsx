 interface CurrentPokemonLeftProps {
  pokemonJapaneseName: string;
  pokemonDefaultName: string;
  pokemonTypes: string[];
  pokemonID: number;
}

import { Badge } from "../ui/badge";
import {Button} from "../ui/button";

import { useState } from "react";
export default function CurrentPokemonLeft({ pokemonJapaneseName, pokemonDefaultName, pokemonTypes, pokemonID }: CurrentPokemonLeftProps) {
  const [isShiny, setIsShiny] = useState(false);
  const handleClick = () => {
    setIsShiny(!isShiny);
    console.log(isShiny);
  }
  return (
    <div className="h-full bg-gray-100 w-2/5 flex flex-col items-center justify-center p-6">
      <Button
        onMouseDown={handleClick}
        className="mt-4 bg-white text-black uppercase font-semibold ring ring-gray-200  transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300"
      >
        Classic Pokémon
      </Button>

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
      <div>
        {pokemonTypes.map((type, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={`bg-${type} text-white dark:bg-${type} font-bold text-xs sm:text-sm uppercase px-3 py-1 rounded-xl mr-2`}
          >
            <img
              src={`/assets/static/pkmnsTypes/${type}.svg`}
              alt={type}
              className="w-2 h-2 sm:w-4 sm:h-4"
            />
            <span className="hidden sm:inline">{type}</span>
          </Badge>
        ))}
      </div>
    </div>
  )
}
