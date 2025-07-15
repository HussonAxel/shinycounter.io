import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2'
const BASE_TYRADEX_URL = 'https://tyradex.vercel.app/api/v1'

export const QUERY_KEYS = {
  pokemons: ['pokemons'] as const,
  pokemonIdWithName: (name: string) => ['pokemonIdWithName', name] as const,
  pokemonPokeAPI: (id: string) => ['pokemonPokeAPI', id] as const,
  pokemonTyradex: (id: string) => ['pokemonTyradex', id] as const,
}

const DEFAULT_CACHE_OPTIONS = {
  staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
  gcTime: 1000 * 60 * 60 * 24 * 30, // 30 days
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
    enabled: !!id,
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
