import {
  useGetNationalDexTyradex,
  useGetPokemonDataByID,
} from '@/data/pokemons'
import { useParams } from '@tanstack/react-router'
import type { PokemonFormsProps } from '@/data/types'
import { Link } from '@tanstack/react-router'
import { normalizePokemonName } from '@/lib/functions'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/data/pokemons'

function EvolutionPokemon({ pokemon }: { pokemon: PokemonFormsProps }) {
  const { data: pokemonData } = useGetPokemonDataByID(pokemon.pokedex_id)
  const englishName = pokemonData?.name || pokemon.name

  return (
    <div
      key={pokemon.pokedex_id}
      className="flex flex-col items-center text-center"
    >
      <Link
        to="/pokemon/$pokemon"
        params={{ pokemon: normalizePokemonName(englishName) }}
      >
        <p>{englishName}</p>
        <img
          src={`/assets/static/sprites/base/${pokemon.pokedex_id}.webp`}
          alt={englishName}
          className="w-32 h-32"
        />
      </Link>
    </div>
  )
}

export default function PokemonForms({
  pokemonEnglishName,
}: {
  pokemonEnglishName: string
}) {
  const { pokemon: pokemonName } = useParams({ from: '/pokemon/$pokemon' })
  const queryClient = useQueryClient()

  const pokemonSpeciesData = queryClient.getQueryData(
    QUERY_KEYS.pokemonSpeciesDataByID(pokemonName),
  )

  const { data: pokemonsTyradex, isLoading: isLoadingTyradex } =
    useGetNationalDexTyradex()

  if (isLoadingTyradex) {
    return <div>Loading...</div>
  }

  const currentPokemonData = pokemonsTyradex.find(
    ({ name }: { name: { en: string } }) =>
      normalizePokemonName(name.en) == pokemonName,
  )

  const preEvoltutions = currentPokemonData?.evolution?.pre || []
  const nextEvolutions = currentPokemonData?.evolution?.next || []

  const pokemonVarieties = pokemonSpeciesData.varieties.map(
    (variety) => variety.pokemon,
  )
  console.log(pokemonVarieties)
  console.log(pokemonSpeciesData.varieties)

  return (
    <>
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Evolution chain and forms
      </h3>
      <div className="mb-6 space-y-3 flex flex-row bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm m-auto items-center justify-center gap-16">
        <p>Evolution chain</p>
        {preEvoltutions?.map((pokemon: PokemonFormsProps) => (
          <EvolutionPokemon key={pokemon.pokedex_id} pokemon={pokemon} />
        ))}
        <div className="flex flex-col items-center text-center">
          <p>{pokemonEnglishName}</p>
          <img
            src={`/assets/static/sprites/base/${currentPokemonData?.pokedex_id}.webp`}
            alt={pokemonEnglishName}
            className="w-32 h-32"
          />
        </div>
        {nextEvolutions?.map((pokemon: PokemonFormsProps) => (
          <EvolutionPokemon key={pokemon.pokedex_id} pokemon={pokemon} />
        ))}
        <p>Forms</p>
      </div>
    </>
  )
}
