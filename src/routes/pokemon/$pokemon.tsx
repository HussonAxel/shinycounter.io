import { createFileRoute } from '@tanstack/react-router'

import CurrentPokemonLeft from '@/components/currentPokemon/currentPokemonLeft'
import CurrentPokemonRight from '@/components/currentPokemon/currentPokemonRight'

import { useGetPokemonFullData } from '@/data/pokemons'



export const Route = createFileRoute('/pokemon/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
    const { pokemon } = Route.useParams()

  const { pokemonData, pokemonSpeciesData, isLoading, isError } =
    useGetPokemonFullData(pokemon)
    
    if (isLoading) {
      return <div className="h-full bg-gray-200 w-3/5">Chargement...</div>
    }

    if (isError) {
      return <div className="h-full bg-gray-200 w-3/5">Erreur de chargement</div>
    }

    if (!pokemonData || !pokemonSpeciesData) {
      return <div className="h-full bg-gray-200 w-3/5">Aucun Pokémon trouvé</div>
    }

    console.log(pokemonData.types.map(type => type.type.name) || [])
  return (
    <section className="h-[calc(100vh-68px)] flex flex-row
    ">
        <CurrentPokemonLeft
          pokemonJapaneseName={pokemonSpeciesData.names.find(name=> name.language.name === 'ja-Hrkt')?.name || 'Nom Japonais Inconnu'}
          pokemonDefaultName={pokemonData.name}
          pokemonTypes={pokemonData.types.map(type => type.type.name) || []}
        />
        <CurrentPokemonRight />
    </section>
  )
}
