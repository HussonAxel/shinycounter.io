import PokemonHeader from './PokemonHeader'
import PokemonSounds from './PokemonSounds'
import PokemonAbilities from './PokemonAbilities'
import PokemonInfo from './PokemonInfo'
// import PokemonStats from './PokemonStats'
import PokemonForms from './PokemonForms'

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
  pokemonStats?: { base_stat: number; name: string }[]
  pokemonEnglishName: string
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
  pokemonEnglishName,
  // pokemonStats = [],
}: CurrentPokemonRightProps) {
  return (
    <div className="bg-gray-50 dar  k:bg-gray-800 w-full md:w-3/5 p-6 rounded-lg shadow-sm h-[calc(100vh-68px)] overflow-y-auto">
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
      <PokemonForms pokemonEnglishName={pokemonEnglishName} />

      {/* <PokemonStats pokemonStats={pokemonStats} /> */}
    </div>
  )
}
