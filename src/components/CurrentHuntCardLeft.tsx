import type { CurrentHuntCardProps } from '@/data/types'
import { Badge } from './ui/badge'
import Counter from './ui/counter'

export default function CurrentHuntCardLeft({
  pokemonPokeAPI,
  pokemonTyradex,
  pokemonJapanaseName,
  pokemonFrenchName,
  pokemonImage,
}: CurrentHuntCardProps) {
  console.log(pokemonTyradex)
  return (
    <aside className="w-full lg:w-2/5 bg-gray-100 p-2 sm:p-4">
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full m-auto">
          <h1 className="text-xl sm:text-2xl lg:text-4xl opacity-30 text-[#1A1A1A] font-bold text-center">
            {pokemonJapanaseName}
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] font-bold text-center mb-2 sm:mb-4">
            {pokemonFrenchName}
          </h2>
          <div className="flex gap-1 sm:gap-2 m-auto justify-center flex-wrap">
            {pokemonTyradex.types?.map((type: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className={`bg-${type.name} text-white dark:bg-${type.name} font-semibold text-xs sm:text-sm`}
              >
                <img
                  src={`/assets/static/pkmnsTypes/${type.name}.svg`}
                  alt={type.name}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
                <span className="hidden sm:inline">{type.name || type}</span>
              </Badge>
            ))}
          </div>
          <div className="flex flex-col items-center w-full mt-2 sm:mt-4">
            <div className="w-full sm:w-4/5 lg:w-3/4">
              <img
                src={pokemonImage}
                alt={pokemonFrenchName}
                className="w-full h-auto max-h-48 sm:max-h-64 lg:max-h-80 object-contain"
              />
            </div>
            <div className="mt-2 sm:mt-4 w-full">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
