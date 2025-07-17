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

    console.log(pokemonData.types.map((type: { type: { name: any } }) => type.type.name) || [])
  return (
    <section
      className="h-[calc(100vh-68px)] flex flex-row
    "
    >
      <CurrentPokemonLeft
        pokemonJapaneseName={
          pokemonSpeciesData.names.find(
            (name: { language: { name: string } }) =>
              name.language.name === 'ja-Hrkt',
          )?.name || 'Nom Japonais Inconnu'
        }
        pokemonDefaultName={pokemonData.name}
        pokemonID={pokemonData.id}
      />
      <CurrentPokemonRight
        pokemonID={pokemonData.id}
        pokemonDefaultName={pokemonData.name}
        pokemonTypes={
          pokemonData.types.map(
            (type: { type: { name: string } }) => type.type.name,
          ) || []
        }
        pokemonFirstAppearance={pokemonSpeciesData.generation.name.replace('generation-', '')}
        pokemonCategory={pokemonSpeciesData.genera.find(
          (genera: { language: { name: string } }) =>
            genera.language.name === 'en'
        )?.genus || 'Catégorie Inconnue'}
        pokemonWeight={pokemonData.weight / 10} // Convert to kg
        pokemonHeight={pokemonData.height / 10} // Convert to m
        pokemonAbilities={pokemonData.abilities}
        pokemonShape={
          pokemonSpeciesData.shape.name || 'Forme Inconnue'
        }
        pokemonColor={
          pokemonSpeciesData.color.name || 'Couleur Inconnue'
        }
      />
    </section>
  )
}
