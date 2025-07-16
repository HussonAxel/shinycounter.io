import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import useSound from 'use-sound'

interface CurrentPokemonRightProps {
  pokemonID: number
  pokemonDefaultName: string
  pokemonTypes: string[]
  pokemonFirstAppearance: string
  pokemonCategory: string
  pokemonWeight: number
  pokemonHeight: number
}

export default function CurrentPokemonRight({
  pokemonID,
  pokemonDefaultName,
  pokemonTypes,
  pokemonFirstAppearance,
  pokemonCategory,
  pokemonWeight,
  pokemonHeight
}: CurrentPokemonRightProps) {
  const [playPokemonLegacyCry] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/${pokemonID}.ogg`,
  )
  const [playPokemonLatestCry] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonID}.ogg`,
  )

  return (
    <div className="h-full bg-gray-200 w-3/5">
      <p className="capitalize">
        {pokemonDefaultName} - #{pokemonID}
      </p>
      <div>
        {pokemonTypes.map((type, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={`bg-${type} text-white dark:bg-${type} font-bold text-xs sm:text-sm uppercase px-3 py-1 rounded-xl mr-2`}
          >
            <img
              src={`/assets/static/pkmnsTypes/${type}.svg`}
              alt={type}
              className="w-2 h-2 sm:w-4 sm:h-4"
            />
            <span className="hidden sm:inline">{type}</span>
          </Badge>
        ))}
        <Button
          onClick={() => playPokemonLatestCry()}
          className="mt-4 bg-white text-black uppercase font-semibold ring ring-gray-200 transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300"
        >
          Latest Cry{' '}
        </Button>
        <Button
          onClick={() => playPokemonLegacyCry()}
          className="mt-4 bg-white text-black uppercase font-semibold ring ring-gray-200 transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300"
        >
          Legacy Cry
        </Button>
      </div>
      <p>First Appearance  : Generation <span className="font-bold uppercase">{pokemonFirstAppearance}</span></p>
      <p>Category : {pokemonCategory}</p>
      <p>Weight: {pokemonWeight}kg </p>
      <p>Height: {pokemonHeight}m </p>
    </div>
  )
}
