import { useParams } from "@tanstack/react-router"
import { useGetTypeDataByName, useGetPokemonDataByID } from "@/data/pokemons"
import { extractPokemonIdFromUrl } from "@/lib/functions"

function PokemonData({ url }: { url: string }) {
  const { data, isLoading, error } = useGetPokemonDataByID(
    extractPokemonIdFromUrl(url),
  )

  if (data) {
    console.log("Données du Pokémon :", data)
  }

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error.message}</div>
  if (!data) return <div>Aucune donnée</div>

  console.log(data)
  
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}


export default function TypePokemons() {
  const type = useParams({
    from: '/type/$type',
    select: (params) => params.type,
  })

  const { data, isLoading, error } = useGetTypeDataByName(type)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No data found</div>

  return (
    <div className="test">
      {data.pokemon.map((pokemon: any) => (
        <PokemonData key={pokemon.pokemon.url} url={pokemon.pokemon.url} />
      ))}
    </div>
  )
}
