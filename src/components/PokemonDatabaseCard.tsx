import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import type { PokemonDatabaseCardProps } from '@/data/types'
import { usePrefetchPokemonDataByID } from '@/data/pokemons'

export default function PokemonDatabaseCard({
  pokemonName,
  pokemonId,
  pokemonImage,
}: PokemonDatabaseCardProps) {

  const prefetchPokemonData = usePrefetchPokemonDataByID()

  const handleOnMouseEnter = async () => {
    prefetchPokemonData(pokemonId.toString())
  }


  return (
      <Card
        className="hover:shadow-lg hover:scale-105 transition-all active:bg-gray-50 active:scale-[100%] active:shadow-xl cursor-pointer rounded-none sm:rounded-md"
        onMouseEnter={handleOnMouseEnter}
      >
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src={pokemonImage}
            alt={pokemonName}
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle className="capitalize">{pokemonName}</CardTitle>
          <CardDescription>#{pokemonId}</CardDescription>
          <CardDescription className="text-center text-black flex gap-2"></CardDescription>
        </CardHeader>
      </Card>
  )
}
