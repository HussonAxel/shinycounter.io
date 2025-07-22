import {
  useGetNationalDexTyradex,
  useGetPokemonFullData,
} from '@/data/pokemons'
import { useParams } from '@tanstack/react-router'
import type { PokemonFormsProps } from '@/data/types'
import { Link } from '@tanstack/react-router'
import { normalizePokemonName } from '@/lib/functions'
import { extractPokemonIdFromUrl } from '@/lib/functions'

interface PokemonVariety {
  is_default: boolean
  pokemon: {
    name: string
    url: string
  }
}

function EvolutionPokemon({ pokemon }: { pokemon: PokemonFormsProps }) {
  const { pokemonData } = useGetPokemonFullData(pokemon.pokedex_id)
  const englishName = pokemonData?.name || pokemon.name

  return (
    <div
      key={pokemon.pokedex_id}
      className="flex flex-col items-center text-center group"
    >
      <Link
        to="/pokemon/$pokemon"
        params={{ pokemon: normalizePokemonName(englishName) }}
        className="block p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-600 active:scale-95 active:shadow-inner"
      >
        <p className=" text-gray-900 dark:text-gray-100 mb-2 text-sm font-semibold capitalize">
          {englishName}
        </p>
        <img
          src={`/assets/static/sprites/base/${pokemon.pokedex_id}.webp`}
          alt={englishName}
          className="w-24 h-24 md:w-28 md:h-28 transition-transform duration-300"
        />
      </Link>
    </div>
  )
}

function CurrentPokemon({
  pokemonEnglishName,
  pokedexId,
}: {
  pokemonEnglishName: string
  pokedexId?: number
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
        <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm capitalize">
          {pokemonEnglishName}
        </p>
        <img
          src={`/assets/static/sprites/base/${pokedexId}.webp`}
          alt={pokemonEnglishName}
          className="w-24 h-24 md:w-28 md:h-28"
        />
      </div>
    </div>
  )
}

function PokemonForm({ variety, isCurrent }: { variety: PokemonVariety, isCurrent: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center group ${isCurrent ? 'ring-2 ring-purple-500' : ''}`}>
      <Link
        to="/pokemon/$pokemon"
        params={{
          pokemon: normalizePokemonName(variety.pokemon.name),
        }}
        className="block p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30 transition-all duration-300 hover:shadow-lg border border-purple-200 dark:border-purple-600 active:scale-95 active:shadow-inner"
      >
        <p className="font-medium text-purple-900 dark:text-purple-100 mb-2 text-sm capitalize">
          {variety.pokemon.name}
        </p>
        <img
          src={`/assets/static/sprites/base/${extractPokemonIdFromUrl(variety.pokemon.url)}.webp`}
          alt={variety.pokemon.name}
          className="w-24 h-24 md:w-28 md:h-28 transition-transform duration-300"
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

  // Utilisation du hook composite
  const { pokemonData, pokemonSpeciesData, isLoading } = useGetPokemonFullData(pokemonName)
  const { data: pokemonsTyradex, isLoading: isLoadingTyradex } =
    useGetNationalDexTyradex()

  if (isLoadingTyradex || isLoading || !pokemonData || !pokemonSpeciesData) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-400">
          Loading...
        </span>
      </div>
    )
  }
  const pokemonVarieties = pokemonSpeciesData.varieties

  const currentPokemonData = pokemonsTyradex.find(
    ({ name }: { name: { en: string } }) =>
      normalizePokemonName(name.en) == pokemonName,
  )

  const preEvoltutions = currentPokemonData?.evolution?.pre || []
  const nextEvolutions = currentPokemonData?.evolution?.next || []

  const hasEvolutions = preEvoltutions.length > 0 || nextEvolutions.length > 0
  const hasForms = pokemonVarieties.length > 0

  if (!hasEvolutions && !hasForms) {
    return null
  }

  return (
    <div className="space-y-6 mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {hasEvolutions && (
          <>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Evolution Chain
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
              {preEvoltutions?.map((pokemon: PokemonFormsProps) => (
                <EvolutionPokemon key={pokemon.pokedex_id} pokemon={pokemon} />
              ))}

              <div className="flex items-center">
                {preEvoltutions.length > 0 && <div className=""></div>}
                <CurrentPokemon
                  pokemonEnglishName={pokemonEnglishName}
                  pokedexId={currentPokemonData?.pokedex_id}
                />
                {nextEvolutions.length > 0 && <div className=""></div>}
              </div>

              {nextEvolutions?.map((pokemon: PokemonFormsProps) => (
                <EvolutionPokemon key={pokemon.pokedex_id} pokemon={pokemon} />
              ))}
            </div>
          </>
        )}

        {hasForms && (
          <>
            {hasEvolutions && (
              <hr className="border-gray-200 dark:border-gray-600 mb-6" />
            )}
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Alternative Forms
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {pokemonVarieties.map(
                (variety: PokemonVariety, index: number) => (
                  <PokemonForm key={index} variety={variety} isCurrent={normalizePokemonName(variety.pokemon.name) === pokemonName} />
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
