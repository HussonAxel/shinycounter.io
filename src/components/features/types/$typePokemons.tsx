import { useParams } from "@tanstack/react-router"
import {
  useGetTypeDataByName,
  usePrefetchPokemonFullData,
  usePrefetchNationalDexTyradex,
  usePrefetchEvolutionChainByURL,
  fetchPokemonSpeciesDataByID,
} from '@/data/pokemons'
import { useGetPokemonsDataByUrls } from "@/data/pokemons"
import { beautifyPokemonName } from "@/lib/functions"
import { Badge } from "@/components/ui/badge"
import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"


export default function TypePokemons() {
  const type = useParams({
    from: '/type/$type',
    select: (params) => params.type,
  })

  const { data, isLoading, error } = useGetTypeDataByName(type)

  const pokemonUrls = data?.pokemon?.map((pokemon: any) => pokemon.pokemon.url) || []
  
  const { data: pokemonsData, isLoading: isLoadingPokemons } =
    useGetPokemonsDataByUrls(pokemonUrls)

  const prefetchPokemonFullData = usePrefetchPokemonFullData()
  const prefetchNationalDexTyradex = usePrefetchNationalDexTyradex()
  const prefetchEvolutionChainByURL = usePrefetchEvolutionChainByURL()

  const handleOnMouseEnter = async (pokemon: any) => {
    prefetchNationalDexTyradex()
    prefetchPokemonFullData(pokemon.name)
    const speciesData = await fetchPokemonSpeciesDataByID(String(pokemon.id))
    const evolutionChainUrl = speciesData?.evolution_chain?.url
    if (evolutionChainUrl) {
      prefetchEvolutionChainByURL(evolutionChainUrl)
    }
  }

  if (isLoading || isLoadingPokemons) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data || !pokemonsData) return <div>No data found</div>

  return (
    <div className="test">
      {pokemonsData.map((pokemon: any) => (
        <div key={pokemon.id} className="flex flex-row gap-2 my-8">
          <img
            src={`/assets/static/sprites/base/${pokemon.id}.webp`}
            alt={pokemon.name}
            className="w-16 h-16"
          />
          <h1>{beautifyPokemonName(pokemon.name)}</h1>
          <h2>#{pokemon.id} </h2>
          {pokemon.types.map((type: any) => (
            <Badge
              key={type.type.name}
              variant="secondary"
              className={`bg-${type.type.name} text-white dark:bg-${type.type.name} font-bold text-xs sm:text-sm uppercase px-2 py-1 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow min-h-8 min-w-32   `}
            >
              <img
                src={`/assets/static/pkmnsTypes/${type.type.name}.svg`}
                alt={type.type.name}
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span>{type.type.name}</span>
            </Badge>
          ))}
          <Link to={`/pokemon/$pokemon`} params={{ pokemon: pokemon.name}} onMouseEnter={() => handleOnMouseEnter(pokemon)}>
            <Button variant="outline">
              <span>Voir</span>
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
