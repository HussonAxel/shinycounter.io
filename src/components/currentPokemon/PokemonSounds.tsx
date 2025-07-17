import { Button } from '@/components/ui/button'
import useSound from 'use-sound'

interface PokemonSoundsProps {
  pokemonID: number
}

export default function PokemonSounds({ pokemonID }: PokemonSoundsProps) {
  const [playPokemonLegacyCry] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/${pokemonID}.ogg`,
    { volume: 0.5 },
  )
  const [playPokemonLatestCry] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonID}.ogg`,
    { volume: 0.5 },
  )

  return (
    <div className="mb-8">
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Sons
      </h3>
      <div className="flex gap-3">
        <Button
          variant={'outline'}
          onClick={() => playPokemonLatestCry()}
          className="text-xs sm:text-sm capitalize hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Latest Cry
        </Button>
        <Button
          variant={'outline'}
          onClick={() => playPokemonLegacyCry()}
          className="text-xs sm:text-sm capitalize hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Legacy Cry
        </Button>
      </div>
    </div>
  )
}
