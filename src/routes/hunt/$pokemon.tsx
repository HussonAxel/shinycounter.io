import { createFileRoute } from '@tanstack/react-router'
import CurrentHuntCardLeft from '@/components/CurrentHuntCardLeft'
import CurrentHuntCardRight from '@/components/CurrentHuntCardRight'
import { useGetPokemonByIdPokeAPI } from '@/data/pokemons'
import useStore from '@/store/store'

export const Route = createFileRoute('/hunt/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  const { counter } = useStore()
  const { pokemon: pokemonName } = Route.useParams()


  const { data: pokemonPokeAPI, isLoading: isLoadingPokemonPokeAPI } =
    useGetPokemonByIdPokeAPI(pokemonName)


  if (isLoadingPokemonPokeAPI) {
    return <div>Loading...</div>
  }

  return (
    <section className="flex flex-col border-t border-gray-200 md:flex-row">
      <CurrentHuntCardLeft
        pokemonId={pokemonId}
        pokemonName={pokemonName}
        pokemonPokeAPI={pokemonPokeAPI}
        pokemonTyradex={pokemonTyradex}
        pokemonJapanaseName={pokemonTyradex.name.jp}
        pokemonFrenchName={pokemonTyradex.name.fr}
        pokemonImage={
          pokemonPokeAPI.sprites.other['official-artwork'].front_default
        }
        currentProgress={counter}
      />
      <CurrentHuntCardRight
        pokemonId={pokemonId}
        pokemonName={pokemonName}
        pokemonPokeAPI={pokemonPokeAPI}
        pokemonTyradex={pokemonTyradex}
        pokemonJapanaseName={pokemonTyradex.name.jp}
        pokemonFrenchName={pokemonTyradex.name.fr}
        pokemonImage={
          pokemonPokeAPI.sprites.other['official-artwork'].front_default
        }
        currentProgress={counter}
      />
    </section>
  )
}
