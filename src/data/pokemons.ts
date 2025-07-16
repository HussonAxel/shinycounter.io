import { useQuery, useQueryClient } from '@tanstack/react-query'

const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2'

export const QUERY_KEYS = {
  nationalDex: ['nationalDex'] as const,
  pokemons: ['pokemons'] as const,
  pokemonDataByID: (id: string) => ['pokemonDataByID', id] as const,
  pokemonSpeciesDataByID: (id: string) =>
    ['pokemonSpeciesDataByID', id] as const,
}

const DEFAULT_CACHE_OPTIONS = {
  keepPreviousData: true,
}


//FETCH FUNCTIONS
export const fetchNationalDex = async () => {
  const response = await fetch(`${BASE_POKEAPI_URL}/pokedex/1`)
  if (!response.ok) {
    throw new Error('Failed to fetch national dex')
  }
  return response.json()
}

export const fetchPokemonDataByID = async (id: string) => {
  console.log("fetching pokemon data by id...", id)
  const response = await fetch(`${BASE_POKEAPI_URL}/pokemon/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch pokemon data by id')
  }
  return response.json()
}

export const fetchPokemonSpeciesDataByID = async(id: string) => {
  const response = await fetch(`${BASE_POKEAPI_URL}/pokemon-species/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch pokemon species data by id')
  }
  return response.json()
}

//QUERY HOOKS 

export const useGetNationalDex = () => {
  return useQuery({
    queryKey: QUERY_KEYS.nationalDex,
    queryFn: fetchNationalDex,
    placeholderData: (previousData) => previousData,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const useGetPokemonDataByID = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemonDataByID(id),
    queryFn: () => fetchPokemonDataByID(id),
    placeholderData: (previousData) => previousData,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const useGetPokemonSpeciesDataByID = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemonSpeciesDataByID(id),
    queryFn: () => fetchPokemonSpeciesDataByID(id),
    placeholderData: (previousData) => previousData,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export function useGetPokemonFullData(id: string) {
const pokemonDataQuery = useGetPokemonDataByID(id)
const pokemonSpeciesDataQuery = useGetPokemonSpeciesDataByID(id)

return {
  pokemonData: pokemonDataQuery.data,
  pokemonSpeciesData: pokemonSpeciesDataQuery.data,
  isLoading: pokemonDataQuery.isLoading || pokemonSpeciesDataQuery.isLoading,
  isError: pokemonDataQuery.isError || pokemonSpeciesDataQuery.isError,
  error: pokemonDataQuery.error || pokemonSpeciesDataQuery.error,
}}

//PREFETCH HOOKS 

export const usePrefetchPokemonDataByID = () => {
  const queryClient = useQueryClient()

  return (id: string) => {
    console.log("prefetching pokemon data by id...", id)
    queryClient.ensureQueryData({
      queryKey: QUERY_KEYS.pokemonDataByID(id),
      queryFn: () => fetchPokemonDataByID(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonSpeciesDataByID = () => {
  const queryClient = useQueryClient()

  return (id: string) => {
    console.log('prefetching pokemon species data by id...', id)
    queryClient.ensureQueryData({
      queryKey: QUERY_KEYS.pokemonSpeciesDataByID(id),
      queryFn: () => fetchPokemonSpeciesDataByID(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonFullData = () => {
  const prefetchPokemonDataByID = usePrefetchPokemonDataByID()
  const prefetchPokemonSpeciesDataByID = usePrefetchPokemonSpeciesDataByID()

  return (id: string) => {
    console.log("prefetching full pokemon data by id...", id)
    prefetchPokemonDataByID(id)
    prefetchPokemonSpeciesDataByID(id)
  }
}