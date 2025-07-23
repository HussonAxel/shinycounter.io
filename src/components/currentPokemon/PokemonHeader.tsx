import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'

import { usePrefetchTypeDataByName } from '@/data/pokemons'

interface PokemonHeaderProps {
  pokemonID: number
  pokemonDefaultName: string
  pokemonTypes: string[]
}

export default function PokemonHeader({
  pokemonID,
  pokemonDefaultName,
  pokemonTypes,
}: PokemonHeaderProps) {

  const prefetchTypeData = usePrefetchTypeDataByName()



  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white capitalize mb-4">
        {pokemonDefaultName} -
        <span className="text-gray-500"> #{pokemonID}</span>
      </h2>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {pokemonTypes.map((type, index) => (
            <Link to={`/type/$type`} key={index} params={{ type }} onMouseEnter={() => prefetchTypeData(type)}>
              <Badge
                variant="secondary"
                className={`bg-${type} text-white dark:bg-${type} font-bold text-xs sm:text-sm uppercase px-3 py-1 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
              >
                <img
                  src={`/assets/static/pkmnsTypes/${type}.svg`}
                  alt={type}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
                <span>{type}</span>
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
