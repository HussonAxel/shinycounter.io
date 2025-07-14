import { createFileRoute, useSearch } from '@tanstack/react-router'
import { z } from 'zod'
import { zodValidator, fallback } from '@tanstack/zod-adapter'
import { startTransition } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import CurrentHuntCard from '@/components/CurrentHuntCard'
import PokemonDatabaseCard from '@/components/PokemonDatabaseCard'
import { useGetAllPokemons } from '@/data/pokemons'

const pokemonSearchSchema = z.object({
  searchTerm: fallback(z.string(), '').default(''),
  activeTab: fallback(z.enum(['hunts', 'pokedex']), 'hunts').default('hunts'),
  activePokemon: fallback(z.string(), '').default(''),
})

export const Route = createFileRoute('/')({
  validateSearch: zodValidator(pokemonSearchSchema),
  component: App,
})

export default function App() {
  const navigate = Route.useNavigate()

  const { data: pokemons } = useGetAllPokemons()
  console.log(pokemons)

  const handleTabChange = (value: string) => {
    startTransition(() => {
      navigate({
        search: (prev) => ({
          ...prev,
          activeTab: value as 'hunts' | 'pokedex',
        }),
        replace: true,
      })
    })
  }

  const searchedPokemon = useSearch({
    from: '/',
    select: (search) => search.searchTerm,
  })

  const currentSearch = useSearch({ from: '/' })

  console.log('searchedPokemon', searchedPokemon)
  console.log('currentSearch', currentSearch)

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
              <Input type="text" placeholder="Search..." />
            </div>
            <TabsContent value="hunts">
              <CurrentHuntCard />
            </TabsContent>
            <TabsContent value="pokedex">
              <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md gap-8 mx-8 my-4">
                {pokemons &&
                  pokemons.map(
                    (pokemon: any) =>
                      pokemon.pokedex_id > 0 && (
                        <PokemonDatabaseCard
                          pokemonName={pokemon.name.en}
                          pokemonId={pokemon.ndex}
                          pokemonImage={`assets/static/sprites/base/${pokemon.pokedex_id}.webp`}
                          pokemonTypes={pokemon.types}
                          pokemonStats={pokemon.stats}
                          pokemonHeight={pokemon.height}
                          pokemonWeight={pokemon.weight}
                          pokemonAbilities={pokemon.talents}
                        />
                      ),
                  )}
              </article>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
