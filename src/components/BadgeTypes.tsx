import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'

import { fetchTypeAndPrefetchPokemons } from '@/data/pokemons'
import { useQueryClient } from '@tanstack/react-query'

interface BadgeTypesProps {
  pokemonTypes: string[]
  className?: string
}

export default function BadgeTypes({
  pokemonTypes,
  className,
}: BadgeTypesProps) {
  const queryClient = useQueryClient()
  const handleOnMouseEnterType = (type: string) => {
    console.log(`Prefetching type '${type}' and its dependent Pokémon...`)
    queryClient.prefetchQuery({
      queryKey: ['typeData', type],
      queryFn: () => fetchTypeAndPrefetchPokemons(type),
    })
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {pokemonTypes.map((type, index) => (
        <Link
          to={`/type/$type`}
          key={index}
          params={{ type }}
          onMouseEnter={() => handleOnMouseEnterType(type)}
        >
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
  )
}
