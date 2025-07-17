import PokemonHeader from './PokemonHeader'
import PokemonSounds from './PokemonSounds'
import PokemonAbilities from './PokemonAbilities'
import PokemonInfo from './PokemonInfo'
import PokemonStats from './PokemonStats'

interface PokemonAbility {
  ability: {
    name: string
  }
}

interface CurrentPokemonRightProps {
  pokemonID: number
  pokemonDefaultName: string
  pokemonTypes: string[]
  pokemonFirstAppearance: string
  pokemonCategory: string
  pokemonWeight: number
  pokemonHeight: number
  pokemonAbilities?: PokemonAbility[]
  pokemonShape: string
  pokemonColor: string
  pokemonStats?: { base_stat: number; stat: { name: string } }[]
}

export default function CurrentPokemonRight({
  pokemonID,
  pokemonDefaultName,
  pokemonTypes,
  pokemonFirstAppearance,
  pokemonCategory,
  pokemonWeight,
  pokemonHeight,
  pokemonAbilities,
  pokemonShape,
  pokemonColor,
  pokemonStats = [],
}: CurrentPokemonRightProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 w-3/5 p-6 rounded-lg shadow-sm">
      <PokemonHeader
        pokemonID={pokemonID}
        pokemonDefaultName={pokemonDefaultName}
        pokemonTypes={pokemonTypes}
      />

      <PokemonSounds pokemonID={pokemonID} />

      <PokemonAbilities pokemonAbilities={pokemonAbilities} />

      <PokemonInfo
        pokemonFirstAppearance={pokemonFirstAppearance}
        pokemonCategory={pokemonCategory}
        pokemonWeight={pokemonWeight}
        pokemonHeight={pokemonHeight}
        pokemonShape={pokemonShape}
        pokemonColor={pokemonColor}
      />

      <PokemonStats pokemonStats={pokemonStats} />
    </div>
  )
}
