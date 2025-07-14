import { createFileRoute } from '@tanstack/react-router'
import CurrentHuntCard from '@/components/CurrentHuntCard'
import { useGetPokemonById, useGetIdWithName } from '@/data/pokemons'

export const Route = createFileRoute('/hunt/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pokemon: pokemonName } = Route.useParams()
  const { data: pokemonId } = useGetIdWithName(pokemonName)

  const { data: pokemon } = useGetPokemonById(pokemonId)
  return (
    <CurrentHuntCard
      pokemonId={pokemonId}
      pokemonName={pokemonName}
      pokemonData={pokemon}
    />
  )
}
