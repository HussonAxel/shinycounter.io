 interface CurrentPokemonLeftProps {
  pokemonJapaneseName: string;
  pokemonDefaultName: string;
  pokemonTypes: string[];
}

import { Badge } from "../ui/badge";

export default function CurrentPokemonLeft({ pokemonJapaneseName, pokemonDefaultName, pokemonTypes }: CurrentPokemonLeftProps) {

  return (
    <div className="h-full bg-gray-100 w-2/5">
      <div>
        <h2>{pokemonJapaneseName}</h2>
        <h3>{pokemonDefaultName}</h3>
        {pokemonTypes.map((type, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={`bg-${type} text-white dark:bg-${type} font-bold text-xs sm:text-sm uppercase px-3 py-2 rounded-xl`}
          >
            <img
              src={`/assets/static/pkmnsTypes/${type}.svg`}
              alt={type}
              className="w-3 h-3 sm:w-5 sm:h-5"
            />
            <span className="hidden sm:inline">{type}</span>
          </Badge>
        ))}
      </div>
    </div>
  )
}
