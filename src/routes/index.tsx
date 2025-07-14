import { createFileRoute, useSearch } from '@tanstack/react-router'
import { z } from 'zod'
import { fallback } from '@tanstack/zod-adapter'
import { startTransition, useCallback, useMemo, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import CurrentHuntCard from '@/components/CurrentHuntCard'
import PokemonDatabaseCard from '@/components/PokemonDatabaseCard'
import { useGetAllPokemons } from '@/data/pokemons'

const pokemonSearchSchema = z.object({
  activeTab: fallback(z.enum(['hunts', 'pokedex']), 'hunts').default('hunts'),
  activePokemon: fallback(z.string(), '').default(''),
})

export const Route = createFileRoute('/')({
  validateSearch: pokemonSearchSchema,
  component: App,
})

export default function App() {
  const currentSearch = useSearch({ from: '/' })
  const navigate = Route.useNavigate()
  const { data: pokemons, isLoading } = useGetAllPokemons()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value)
  }, [])

  const handleTabChange = useCallback(
    (value: string) => {
      startTransition(() => {
        navigate({
          search: (prev) => ({
            ...prev,
            activeTab: value as 'hunts' | 'pokedex',
          }),
          replace: true,
        })
      })
    },
    [navigate],
  )

  const filteredPokemons = useMemo(() => {
    if (!pokemons) return []

    const searchTermLower = searchTerm.toLowerCase().trim()

    return pokemons
      .filter((pokemon: any) => pokemon.pokedex_id && pokemon.pokedex_id > 0)
      .filter((pokemon: any) => {
        if (!searchTermLower) return true

        return (
          pokemon.name.fr.toLowerCase().includes(searchTermLower) ||
          pokemon.pokedex_id.toString().includes(searchTermLower) ||
          pokemon.types?.some((type: any) =>
            type.name.toLowerCase().includes(searchTermLower),
          )
        )
      })
  }, [pokemons, searchTerm])

  return (
    <div className="min-h-screen bg-[#fafafa] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#1a1a1a]">
            Pokemon Hunt Tracker
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-1 mb-6">
          <Tabs
            value={currentSearch.activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="flex w-full bg-white   rounded-lg">
              <TabsTrigger
                value="hunts"
                className="flex-1 py-3 px-6 rounded-lg text-black font-medium data-[state=active]:text-black"
              >
                Hunts
              </TabsTrigger>
              <TabsTrigger
                value="pokedex"
                className="flex-1 py-3 px-6 rounded-lg text-black font-medium data-[state=active]:text-black"
              >
                Pokedex
              </TabsTrigger>
            </TabsList>

            <div className="relative mt-4 mx-8">
              <Input
                type="text"
                placeholder="Search Pokemon by name, ID, or type..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pr-10"
              />
            </div>

            <TabsContent value="hunts">
              <CurrentHuntCard />
            </TabsContent>

            <TabsContent value="pokedex">
              <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-8 my-4">
                {isLoading ? (
                  <div className="col-span-full flex justify-center py-8">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                  </div>
                ) : filteredPokemons.length === 0 ? (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    {searchTerm
                      ? 'No Pokemon found matching your search.'
                      : 'No Pokemon available.'}
                  </div>
                ) : (
                  filteredPokemons.map((pokemon: any) => (
                    <PokemonDatabaseCard
                      key={pokemon.pokedex_id}
                      pokemonName={pokemon.name.fr}
                      pokemonId={pokemon.pokedex_id}
                      pokemonImage={`assets/static/sprites/base/${pokemon.pokedex_id}.webp`}
                      pokemonTypes={pokemon.types}
                      pokemonStats={pokemon.stats}
                      pokemonHeight={pokemon.height}
                      pokemonWeight={pokemon.weight}
                      pokemonAbilities={pokemon.talents}
                    />
                  ))
                )}
              </article>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
