import type { CurrentHuntCardProps } from '@/data/types'
import { Badge } from './ui/badge'
import Counter from './ui/counter'

export default function CurrentHuntCard({
  pokemonPokeAPI,
  pokemonTyradex,
  pokemonJapanaseName,
  pokemonFrenchName,
  pokemonImage,
}: CurrentHuntCardProps) {
  console.log(pokemonTyradex)
  return (
    <div>
      <h1 className="text-2xl opacity-30 text-[#1A1A1A] font-bold">
        {pokemonJapanaseName}
      </h1>
      <h2>{pokemonFrenchName}</h2>
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
      <img
        src={pokemonImage}
        alt={pokemonFrenchName}
        className="h-24 w-24 md:h-48 md:w-48 object-contain"
      />
      <Counter />
    </div>
  )
}
