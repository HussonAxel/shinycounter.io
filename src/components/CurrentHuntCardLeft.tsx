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
    <aside className="w-1/4 bg-gray-100 p-4">
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full m-auto">
          <h1 className="text-4xl opacity-30 text-[#1A1A1A] font-bold text-center">
            {pokemonJapanaseName}
          </h1>
          <h2 className="text-2xl  text-[#1A1A1A] font-bold text-center mb-4">
            {pokemonFrenchName}
          </h2>
          <div className="flex gap-2 m-auto justify-center">
            {pokemonTyradex.types?.map((type: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className={`bg-${type.name} text-white dark:bg-${type.name} font-semibold`}
              >
                <img
                  src={`/assets/static/pkmnsTypes/${type.name}.svg`}
                  alt={type.name}
                  className="w-4 h-4"
                />
                {type.name || type}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="w-3/4">
              <img
                src={pokemonImage}
                alt={pokemonFrenchName}
                className="w-full h-3/4 object-contain"
              />
            </div>
            <Counter />
          </div>
        </div>
      </div>
    </aside>
  )
}
