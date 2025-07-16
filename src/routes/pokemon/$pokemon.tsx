import { createFileRoute } from '@tanstack/react-router'

import CurrentPokemonLeft from '@/components/currentPokemon/currentPokemonLeft'
import CurrentPokemonRight from '@/components/currentPokemon/currentPokemonRight'

import { useGetPokemonDataByID } from '@/data/pokemons'



export const Route = createFileRoute('/pokemon/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
    const { pokemon } = Route.useParams()

    const { data: pokemonData, isLoading, isError } = useGetPokemonDataByID(pokemon)


    if (!isLoading && pokemonData) {
      console.log('Pokemon data loaded:', pokemonData)
    }

    if (isLoading) {
      return <div className="h-full bg-gray-200 w-3/5">Chargement...</div>
    }

    if (isError) {
      return (
        <div className="h-full bg-gray-200 w-3/5">Erreur de chargement</div>
      )
    }
  return (
    <section className="h-[calc(100vh-68px)] flex flex-row
    ">
        <CurrentPokemonLeft />
        <CurrentPokemonRight />
    </section>
  )
}
