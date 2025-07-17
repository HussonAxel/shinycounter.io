import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'

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
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white capitalize mb-4">
        {pokemonDefaultName} -
        <span className="text-gray-500"> #{pokemonID}</span>
      </h2>
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {pokemonTypes.map((type, index) => (
            <Link to={`/type/$type`} key={index} params={{ type }}>
              <Badge
                variant="secondary"
                className={`bg-${type} text-white dark:bg-${type} font-bold text-xs sm:text-sm uppercase px-3 py-2 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
              >
                <img
                  src={`/assets/static/pkmnsTypes/${type}.svg`}
                  alt={type}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="hidden sm:inline">{type}</span>
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
