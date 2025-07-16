import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2'

export const QUERY_KEYS = {
  nationalDex: ['nationalDex'] as const, 
  pokemons: ['pokemons'] as const,
  pokemonIdWithName: (name: string) => ['pokemonIdWithName', name] as const,
  pokemonPokeAPI: (id: string) => ['pokemonPokeAPI', id] as const,
  pokemonTyradex: (id: string) => ['pokemonTyradex', id] as const,
  pokemonDataByID: (id: string) => ['pokemonDataByID', id] as const,
}

const DEFAULT_CACHE_OPTIONS = {
  staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
  gcTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  keepPreviousData: true,
}


//FETCH FUNCTIONS
export const fetchNationalDex = async () => {
  const response = await axios.get(`${BASE_POKEAPI_URL}/pokedex/1`)
  if (response.status !== 200) {
    throw new Error('Failed to fetch national dex')
  }
  return response.data
}

export const fetchPokemonDataByID = async (id: string) => {
  console.log("fetching pokemon data by id...", id)
  const response = await axios.get(`${BASE_POKEAPI_URL}/pokemon/${id}`)
  if (response.status !== 200) {
    throw new Error('Failed to fetch pokemon data by id')
  }
  return response.data
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

