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
import BadgeTypes from '@/components/BadgeTypes'

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

  if (isLoading || isLoadingPokemons) return <div>Chargement...</div>
  if (error) return <div>Erreur: {error.message}</div>
  if (!data || !pokemonsData) return <div>Aucune donnée trouvée</div>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pokémon de type {type}</h2>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left p-3 font-medium">
                Sprite
              </TableHead>
              <TableHead className="text-left p-3 font-medium">
                Nom du Pokémon
              </TableHead>
              <TableHead className="text-left p-3 font-medium">ID</TableHead>
              <TableHead className="text-left p-3 font-medium">Types</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pokemonsData.map((pokemon: Pokemon) => (
              <TableRow key={pokemon.id} className="border-b hover:bg-gray-50">
                <TableCell>
                  <img
                    src={`/assets/static/sprites/base/${pokemon.id}.webp`}
                    alt={pokemon.name}
                    className="w-24 h-24"
                  />
                </TableCell>
                <TableCell className="text-left p-3 capitalize">
                  {pokemon.name}
                </TableCell>
                <TableCell className="text-left p-3">{pokemon.id}</TableCell>
                <TableCell className="text-left p-3">
                  <BadgeTypes
                    pokemonTypes={pokemon.types.map(
                      (type: any) => type.type.name,
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
