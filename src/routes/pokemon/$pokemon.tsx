import { createFileRoute } from '@tanstack/react-router'

import CurrentPokemonLeft from '@/components/currentPokemon/currentPokemonLeft'
import CurrentPokemonRight from '@/components/currentPokemon/currentPokemonRight'

import {
  useGetPokemonFullData,
  useGetEvolutionChainByURL,
} from '@/data/pokemons'

import { extractPokemonIdFromUrl } from '@/lib/functions'

export const Route = createFileRoute('/pokemon/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pokemon } = Route.useParams()
  
  const { pokemonData, pokemonSpeciesData, isLoading, isError } =
  useGetPokemonFullData(pokemon)
  
  const evolutionChainURL = pokemonSpeciesData?.evolution_chain?.url

  const { data: evolutionChainData, isLoading: isLoadingEvolutionChain, isError: isErrorEvolutionChain } = useGetEvolutionChainByURL(
    evolutionChainURL
  )

  
  
  if (isLoading || isLoadingEvolutionChain) {
    return <div className="h-full bg-gray-200 w-3/5">Chargement...</div>
  }
  
  if (isError || isErrorEvolutionChain) {
    return <div className="h-full bg-gray-200 w-3/5">Erreur de chargement</div>
  }
  
  if (!pokemonData || !pokemonSpeciesData) {
    return <div className="h-full bg-gray-200 w-3/5">Aucun Pokémon trouvé</div>
  }

  console.log('Evolution Chain Data:', evolutionChainData)

  return (
    <section className="max-h-[calc(100vh-68px)] flex flex-col md:flex-row">
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
        pokemonFirstAppearance={pokemonSpeciesData.generation.name.replace(
          'generation-',
          '',
        )}
        pokemonCategory={
          pokemonSpeciesData.genera.find(
            (genera: { language: { name: string } }) =>
              genera.language.name === 'en',
          )?.genus || 'Catégorie Inconnue'
        }
        pokemonWeight={pokemonData.weight / 10} // Convert to kg
        pokemonHeight={pokemonData.height / 10} // Convert to m
        pokemonAbilities={pokemonData.abilities}
        pokemonShape={pokemonSpeciesData.shape.name || 'Forme Inconnue'}
        pokemonColor={pokemonSpeciesData.color.name || 'Couleur Inconnue'}
        pokemonStats={pokemonData.stats.map(
          (stat: { base_stat: number; stat: { name: string } }) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
          }),
        )}
        pokemonBaseForm={evolutionChainData.chain.species.name}
        pokemonNextForms={
          evolutionChainData.chain.evolves_to
            ?.map(
              (evolve: { species: { name: string } }) => evolve.species.name,
            )
            .join(', ') || ''
        }
        pokemonNextNextForms={
          evolutionChainData.chain.evolves_to
            ?.flatMap(
              (evolve: any) =>
                evolve.evolves_to?.map(
                  (nextEvolve: { species: { name: string } }) =>
                    nextEvolve.species.name,
                ) || [],
            )
            .join(', ') || ''
        }
        pokemonBaseFormID={extractPokemonIdFromUrl(
          evolutionChainData.chain.species.url,
        ) ?? undefined}
        pokemonNextFormsID={
          evolutionChainData.chain.evolves_to
            ?.map((evolve: { species: { url: string } }) =>
              extractPokemonIdFromUrl(evolve.species.url),
            )
            .join(', ') || undefined
        }
        pokemonNextNextFormsID={
          evolutionChainData.chain.evolves_to
            ?.flatMap(
              (evolve: any) =>
                evolve.evolves_to?.map(
                  (nextEvolve: { species: { url: string } }) =>
                    extractPokemonIdFromUrl(nextEvolve.species.url),
                ) || [],
            )
            .join(', ') || undefined
        }
      />
    </section>
  )
}
