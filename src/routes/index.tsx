import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo } from 'react'
import { z } from 'zod'
import PokemonDatabaseCard from '@/components/PokemonDatabaseCard'
import { useGetNationalDex } from '@/data/pokemons'

const pokemonSearchSchema = z.object({
  activeTab: z.enum(['hunts', 'pokedex']).optional().catch('hunts'),
})

export const Route = createFileRoute('/')({
  validateSearch: pokemonSearchSchema,
  component: PokemonApp,
})

function PokemonApp() {
  const { data: pokemons, isLoading } = useGetNationalDex()
  const pokemonEntries = pokemons?.pokemon_entries ?? []

  const filteredPokemons = useMemo(() => {
    if (!pokemonEntries || !Array.isArray(pokemonEntries)) return []

    let filtered = pokemonEntries.filter(
      (pokemon: any) => pokemon.entry_number && pokemon.entry_number > 0,
    )
    return filtered
  }, [pokemonEntries])

  return (
    <div className="min-h-screen bg-[#fafafa] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-[#1a1a1a]">
            Pokemon Hunt Tracker
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-1 mb-6">
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-8 my-4">
            {isLoading ? (
              <div className="col-span-full flex justify-center py-8">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
              </div>
            ) : filteredPokemons.length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                <p>No Pokemon available</p>
              </div>
            ) : (
              filteredPokemons.map((pokemon: any) => (
                <Link
                  to="/pokemon/$pokemon"
                  params={{ pokemon: pokemon.pokemon_species.name }}
                >
                  <PokemonDatabaseCard
                    pokemonName={pokemon.pokemon_species.name}
                    pokemonId={pokemon.entry_number}
                    pokemonImage={`assets/static/sprites/base/${pokemon.entry_number}.webp`}
                  />
                </Link>
              ))
            )}
          </article>
        </div>
      </div>
    </div>
  )
}
