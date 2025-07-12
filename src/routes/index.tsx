import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { zodValidator, fallback } from '@tanstack/zod-adapter'
import { useEffect, useState, startTransition } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import CurrentHuntCard from '@/components/CurrentHuntCard'
import PokemonDatabaseCard from '@/components/PokemonDatabaseCard'
import { useGetAllPokemons } from '@/data/pokemons'

const pokemonSearchSchema = z.object({
  searchTerm: fallback(z.string(), '').default(''),
  activeTab: fallback(z.enum(['hunts', 'pokemon']), 'hunts').default('hunts'),
  activePokemon: fallback(z.string(), '').default(''),
})

export const Route = createFileRoute('/')({
  validateSearch: zodValidator(pokemonSearchSchema),
  component: App,
})

export default function App() {
  const search = Route.useSearch()
  const navigate = Route.useNavigate()

  const { data: pokemons } = useGetAllPokemons()
  console.log(pokemons)

  const [localSearchTerm, setLocalSearchTerm] = useState(search.searchTerm)

  useEffect(() => {
    setLocalSearchTerm(search.searchTerm)
  }, [search.searchTerm])

  const debouncedSetSearchTerm = useDebouncedCallback((value: string) => {
    startTransition(() => {
      navigate({
        search: (prev) => ({
          ...prev,
          searchTerm: value,
        }),
        replace: true,
      })
    })
  }, 300)

  const handleSearchChange = (value: string) => {
    setLocalSearchTerm(value)
    debouncedSetSearchTerm(value)
  }

  const handleTabChange = (value: string) => {
    startTransition(() => {
      navigate({
        search: (prev) => ({
          ...prev,
          activeTab: value as 'hunts' | 'pokemon',
        }),
        replace: true,
      })
    })
  }

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
            value={search.activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="flex w-full bg-white rounded-lg">
              <TabsTrigger
                value="hunts"
                className="flex-1 py-3 px-6 rounded-lg text-black font-medium data-[state=active]:text-black"
              >
                Current Hunts
              </TabsTrigger>
              <TabsTrigger
                value="pokemon"
                className="flex-1 py-3 px-6 rounded-lg text-black font-medium data-[state=active]:text-black"
              >
                Pokemon Database
              </TabsTrigger>
            </TabsList>
            <div className="relative mt-4 mx-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#1a1a1a] opacity-60" />
              <Input
                placeholder="Search..."
                value={localSearchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-[#f2f2f2] border-[#e6e6e6] text-[#1a1a1a] placeholder-[#1a1a1a] placeholder-opacity-60"
              />
            </div>
            <TabsContent value="hunts">
              <CurrentHuntCard />
            </TabsContent>
            <TabsContent value="pokemon">
              <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md gap-8 mx-8 my-4">
                {pokemons &&
                  pokemons.map((pokemon: any) => (
                    <PokemonDatabaseCard
                      pokemonName={pokemon.name.en}
                      pokemonId={pokemon.ndex}
                      pokemonImage={`assets/static/sprites/base/${pokemon.pokedex_id}.webp`}
                      pokemonTypes={pokemon.types}
                      pokemonStats={pokemon.stats}
                    />
                  ))}
              </article>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
