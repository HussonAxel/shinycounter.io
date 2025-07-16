import {Badge} from '@/components/ui/badge'

interface CurrentPokemonRightProps {
  pokemonID: number;
  pokemonDefaultName: string;
  pokemonTypes: string[];
}

export default function CurrentPokemonRight({ pokemonID, pokemonDefaultName, pokemonTypes  }: CurrentPokemonRightProps) {
  return (
    <div className="h-full bg-gray-200 w-3/5">
      <p className='capitalize'>{pokemonDefaultName} - #{pokemonID}</p>
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
