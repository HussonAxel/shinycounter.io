import { useParams } from '@tanstack/react-router'
import { useGetTypeDataByName } from '@/data/pokemons'
import { useGetPokemonsDataByUrls } from '@/data/pokemons'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { beautifyPokemonName } from '@/lib/functions'
import { GENERATIONS } from '@/data/consts'
import Comp369 from '@/components/DropdownTooltip'
import { PokeballIcon } from '@/components/svg/pokeball'

type Pokemon = {
  id: number
  name: string
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
  }>
}

export default function TypePokemons() {
  const type = useParams({
    from: '/type/$type',
    select: (params) => params.type,
  })

  const { data, isLoading, error } = useGetTypeDataByName(type)

  const pokemonUrls =
    data?.pokemon?.map((pokemon: any) => pokemon.pokemon.url) || []

  const { data: pokemonsData, isLoading: isLoadingPokemons } =
    useGetPokemonsDataByUrls(pokemonUrls)

  if (isLoading || isLoadingPokemons)
    return (
      <div className="w-3/4 mx-auto flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 font-medium">Chargement des Pokémon...</p>
        </div>
      </div>
    )

  if (error)
    return (
      <div className="w-3/4 mx-auto flex items-center justify-center min-h-[400px]">
        <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 font-medium">Erreur: {error.message}</p>
        </div>
      </div>
    )

  if (!data || !pokemonsData)
    return (
      <div className="w-3/4 mx-auto flex items-center justify-center min-h-[400px]">
        <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-600 font-medium">Aucune donnée trouvée</p>
        </div>
      </div>
    )

  const isPokemonCaught = (pokemonId: number) => {
    return pokemonId % 2 === 0
  }

  const tableRows = ["Sprites", "Statut", "ID", "Nom", "Génération", "HP", "ATK", "DEF", "ATK. SPE", "DEF. SPE", "SPEED", "Tabs"]

  return (
    <div className="w-9/10 mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 capitalize">
          {type} pokemons
        </h2>
        <p className="text-gray-600 text-lg">
          {pokemonsData.length} found
          {pokemonsData.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                {tableRows.map((row) => (
                  <TableHead key={row} className="text-left p-4 font-semibold text-gray-700 uppercase tracking-wide text-sm max-w-28">
                    {row}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {pokemonsData.map((pokemon: Pokemon) => (
                <TableRow key={pokemon.id} className="border-b border-gray-100">
                  <TableCell className="p-4 pl-0">
                    <div className="flex items-center justify-center">
                      <div className="relative group-hover:scale-110 transition-transform duration-200">
                        <img
                          src={`/assets/static/sprites/base/${pokemon.id}.webp`}
                          alt={pokemon.name}
                          className="w-20 h-20 object-contain drop-shadow-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/assets/static/sprites/base/1.webp' // Fallback image
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="p-4 text-center">
                    <div className="group cursor-pointer">
                      <PokeballIcon isCaught={isPokemonCaught(pokemon.id)} />
                    </div>
                  </TableCell>
                  <TableCell className="p-4 text-left">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-bold text-sm rounded-md border border-gray-300 shadow-sm text-left">
                      #{pokemon.id.toString().padStart(3, '0')}
                    </span>
                  </TableCell>
                  <TableCell className="p-4 text-left">
                    <div className="font-semibold text-left text-md text-clip max-w-28">
                      {beautifyPokemonName(pokemon.name)}
                    </div>
                  </TableCell>
                  <TableCell className="p-4 text-left">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium rounded-full border border-green-400">
                      {
                        GENERATIONS.find(
                          (generation) =>
                            pokemon.id >= generation.start &&
                            pokemon.id <= (generation?.end || 100000),
                        )?.name
                      }
                    </span>
                  </TableCell>

                  {pokemon.stats.map((stat: any, statIndex: number) => (
                    <TableCell className="p-4 text-left">
                      <div className="flex flex-col gap-2 w-full">
                        <div key={statIndex} className="w-full">
                          <span className="text-sm text-gray-500">
                            {stat.base_stat}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                  ))}
                  <TableCell className="p-4 pr-0">
                    <div className="flex items-left justify-left">
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        <Comp369 pokemonName={pokemon.name} />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>
          Affichage de {pokemonsData.length} Pokémon de type {type}
        </p>
      </div>
    </div>
  )
}
