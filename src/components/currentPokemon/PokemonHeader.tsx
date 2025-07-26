import BadgeTypes from '../BadgeTypes'
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
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white capitalize mb-4">
        {pokemonDefaultName} -
        <span className="text-gray-500"> #{pokemonID}</span>
      </h2>
      <div className="mb-6">
        <BadgeTypes pokemonTypes={pokemonTypes} />
      </div>
    </div>
  )
}
