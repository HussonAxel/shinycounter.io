import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2'
const BASE_TYRADEX_URL = 'https://tyradex.vercel.app/api/v1'

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
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const useGetPokemonDataByID = (id: string, enabled: boolean = false) => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemonDataByID(id),
    queryFn: () => fetchPokemonDataByID(id),
    enabled: enabled && !!id,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

//PREFETCH HOOKS 
export const usePrefetchPokemonDataByID = () => {
  const queryClient = useQueryClient()

  return (id: string) => {
    console.log("prefetching pokemon data by id...", id)
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.pokemonDataByID(id),
      queryFn: () => fetchPokemonDataByID(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}




































export const fetchAllPokemons = async () => {
  const response = await axios.get(`${BASE_TYRADEX_URL}/pokemon`)
  return response.data
}

export const fetchPokemonIdByName = async (name: string) => {
  const response = await axios.get(`${BASE_TYRADEX_URL}/pokemon/${name}`)
  return response.data.pokedex_id
}

export const fetchPokemonByIdPokeAPI = async (id: string) => {
  const response = await axios.get(`${BASE_POKEAPI_URL}/pokemon/${id}`)
  console.log(response.data)
  return response.data
}

export const fetchPokemonByIdTyradex = async (id: string) => {
  const response = await axios.get(`${BASE_TYRADEX_URL}/pokemon/${id}`)
  return response.data
}

export const useGetAllPokemons = () => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemons,
    queryFn: fetchAllPokemons,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const useGetIdWithName = (name: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemonIdWithName(name),
    queryFn: () => fetchPokemonIdByName(name),
    enabled: !!name,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const useGetPokemonByIdPokeAPI = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemonPokeAPI(id),
    queryFn: () => fetchPokemonByIdPokeAPI(id),
    enabled: false,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const useGetPokemonByIdTyradex = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.pokemonTyradex(id),
    queryFn: () => fetchPokemonByIdTyradex(id),
    enabled: !!id,
    ...DEFAULT_CACHE_OPTIONS,
  })
}

export const usePrefetchAllPokemons = () => {
  const queryClient = useQueryClient()

  return () => {
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.pokemons,
      queryFn: fetchAllPokemons,
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonByIDWithPokeAPI = () => {
  const queryClient = useQueryClient()

  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.pokemonPokeAPI(id),
      queryFn: () => fetchPokemonByIdPokeAPI(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonByIDWithTyradex = () => {
  const queryClient = useQueryClient()

  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.pokemonTyradex(id),
      queryFn: () => fetchPokemonByIdTyradex(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}
