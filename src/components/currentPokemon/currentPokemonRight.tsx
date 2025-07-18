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
  pokemonBaseForm: string
  pokemonNextForms?: string
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
  pokemonBaseForm,
  pokemonNextForms,
}: CurrentPokemonRightProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 w-full md:w-3/5 p-6 rounded-lg shadow-sm">
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
      <PokemonForms
        pokemonBaseForm={pokemonBaseForm}
        pokemonNextForms={pokemonNextForms}
      />

      {/* <PokemonStats pokemonStats={pokemonStats} /> */}
    </div>
  )
}
