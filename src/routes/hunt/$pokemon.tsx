import { createFileRoute } from '@tanstack/react-router'
import CurrentHuntCard from '@/components/CurrentHuntCard'
import {
  useGetPokemonByIdPokeAPI,
  useGetIdWithName,
  useGetPokemonByIdTyradex,
} from '@/data/pokemons'

export const Route = createFileRoute('/hunt/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pokemon: pokemonName } = Route.useParams()
  const { data: pokemonId, isLoading: isLoadingId } =
    useGetIdWithName(pokemonName)

  const { data: pokemonPokeAPI, isLoading: isLoadingPokemonPokeAPI } =
    useGetPokemonByIdPokeAPI(pokemonId)

  const { data: pokemonTyradex, isLoading: isLoadingPokemonTyradex } =
    useGetPokemonByIdTyradex(pokemonId)

  if (isLoadingId || isLoadingPokemonPokeAPI || isLoadingPokemonTyradex) {
    return <div>Loading...</div>
  }

  return (
    <CurrentHuntCard
      pokemonId={pokemonId}
      pokemonName={pokemonName}
      pokemonPokeAPI={pokemonPokeAPI}
      pokemonTyradex={pokemonTyradex}
    />
  )
}
