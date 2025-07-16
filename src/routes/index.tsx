import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CurrentHuntCard from '@/components/CurrentHuntsCardGlobalViewer'
import PokemonDatabaseCard from '@/components/PokemonDatabaseCard'
import { useGetNationalDex } from '@/data/pokemons'

const pokemonSearchSchema = z.object({
  searchTerm: z.string().optional().catch(''),
  activeTab: z.enum(['hunts', 'pokedex']).optional().catch('hunts'),
})

export const Route = createFileRoute('/')({
  validateSearch: pokemonSearchSchema,
  component: PokemonApp,
})

function PokemonApp() {
  const navigate = useNavigate({ from: '/' })
  const { searchTerm = '', activeTab = 'hunts' } = useSearch({ from: '/' })

  const { data: pokemons, isLoading } = useGetNationalDex()
  const pokemonEntries = pokemons?.pokemon_entries ?? []

  const handleSearchChange = (value: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        searchTerm: value || undefined,
      }),
      replace: true,
    })
  }

  const handleTabChange = (value: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        activeTab: value as 'hunts' | 'pokedex',
      }),
      replace: true,
    })
  }

  const filteredPokemons = useMemo(() => {
    console.log(pokemonEntries)
    if (!pokemonEntries || !Array.isArray(pokemonEntries)) return []

    let filtered = pokemonEntries.filter(
      (pokemon: any) => pokemon.entry_number && pokemon.entry_number > 0,
    )

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase().trim()
      filtered = filtered.filter((pokemon: any) => {
        return (
          pokemon.name?.fr?.toLowerCase().includes(searchLower) ||
          pokemon.entry_number.toString().includes(searchLower) ||
          pokemon.types?.some((type: any) =>
            type.name?.toLowerCase().includes(searchLower),
          )
        )
      })
    }

    return filtered
  }, [pokemonEntries, searchTerm])

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
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="flex w-full bg-white rounded-lg">
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
                    <div key={pokemon.entry_number}>
                      <PokemonDatabaseCard
                        pokemonName={pokemon.pokemon_species.name}
                        pokemonId={pokemon.entry_number}
                        pokemonImage={`assets/static/sprites/base/${pokemon.entry_number}.webp`}
                        pokemonTypes={pokemon.types}
                        pokemonStats={pokemon.stats}
                        pokemonHeight={pokemon.height}
                        pokemonWeight={pokemon.weight}
                        pokemonAbilities={pokemon.talents}
                        currentProgress={pokemon.current_progress}
                      />
                    </div>
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
