import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const useGetAllPokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/pokemon?limit=100000&offset=0`,
      )
      const data = response.data
      return data
    },
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 30,
  })
}

export const useGetSinglePokemon = (id: string) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      const pokemonResponse = await axios.get(`${BASE_URL}/pokemon/${id}`)
      return pokemonResponse.data
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 30,
  })
}
