import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2'
const BASE_TYRADEX_URL = 'https://tyradex.vercel.app/api/v1'

export const useGetAllPokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const response = await axios.get(`${BASE_TYRADEX_URL}/pokemon`)
      const data = response.data
      return data
    },
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 30,
  })
}

export const useGetIdWithName = (name: string) => {
  return useQuery({
    queryKey: ['pokemonIdWithName', name],
    queryFn: async () => {
      const response = await axios.get(`${BASE_TYRADEX_URL}/pokemon/${name}`)
      const data = response.data.pokedex_id
      return data
    },
    enabled: !!name,
  })
}

export const useGetPokemonByIdPokeAPI = (id: string) => {
  return useQuery({
    queryKey: ['pokemonPokeAPI', id],
    queryFn: async () => {
      const response = await axios.get(`${BASE_POKEAPI_URL}/pokemon/${id}`)
      const data = response.data
      return data
    },
    enabled: !!id,
  })
}

export const useGetPokemonByIdTyradex = (id: string) => {
  return useQuery({
    queryKey: ['pokemonTyradex', id],
    queryFn: async () => {
      const responose = await axios.get(`${BASE_TYRADEX_URL}/pokemon/${id}`)
      const data = responose.data
      return data
    },
    enabled: !!id,
  })
}
