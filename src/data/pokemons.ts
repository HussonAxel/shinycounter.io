import { useQuery, useQueryClient } from '@tanstack/react-query'

//──────────────────────────────────────────────────────────────────────────────
// CONSTANTS
//──────────────────────────────────────────────────────────────────────────────
const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2'

const DEFAULT_CACHE_OPTIONS = {
  keepPreviousData: true,
}

//──────────────────────────────────────────────────────────────────────────────
// QUERY KEYS
//──────────────────────────────────────────────────────────────────────────────
export const QUERY_KEYS = {
  nationalDex: ['nationalDex'] as const,
  nationalDexTyradex: ['nationalDexTyradex'] as const,
  pokemons: ['pokemons'] as const,
  pokemonDataByID: (id: string) => ['pokemonDataByID', id] as const,
  pokemonsDataByUrls: (urls: string[]) => ['pokemonsDataByUrls', urls] as const,
  pokemonSpeciesDataByID: (id: string) =>
    ['pokemonSpeciesDataByID', id] as const,
  typeDataByName: (name: string) => ['typeData', name] as const,
}

//──────────────────────────────────────────────────────────────────────────────
// FETCH FUNCTIONS
//──────────────────────────────────────────────────────────────────────────────
export const fetchNationalDex = async () => {
  const res = await fetch(`${BASE_POKEAPI_URL}/pokedex/1`)
  if (!res.ok) throw new Error('Failed to fetch national dex')
  return res.json()
}

export const fetchNationalDexTyradex = async () => {
  const res = await fetch('https://tyradex.vercel.app/api/v1/pokemon')
  if (!res.ok) throw new Error('Failed to fetch national dex tyradex')
  return res.json()
}

export const fetchPokemonDataByID = async (id: string) => {
  const res = await fetch(`${BASE_POKEAPI_URL}/pokemon/${id}`)
  if (!res.ok) throw new Error('Failed to fetch pokemon data by id')
  return res.json()
}

export const fetchPokemonsDataByUrls = async(urls: string[]) => {
  const res = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  return res
}

export const fetchPokemonSpeciesDataByID = async (id: string) => {
  const res = await fetch(`${BASE_POKEAPI_URL}/pokemon-species/${id}`)
  if (!res.ok) throw new Error('Failed to fetch pokemon species data by id')
  return res.json()
}

export const fetchEvolutionChainByURL = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch evolution chain data')
  return res.json()
}

export const fetchAllTypes = async () => {
  const res = await fetch(`${BASE_POKEAPI_URL}/type`)
  if (!res.ok) throw new Error('Failed to fetch all types')
  return res.json()
}
export const fetchDataTypeByName = async (name: string) => {
  const res = await fetch(`${BASE_POKEAPI_URL}/type/${name}`)
  if (!res.ok) throw new Error(`Failed to fetch type data for ${name}`)
  return res.json()
}

export const fetchTalentDataByName = async (name: string) => {
  const res = await fetch(`${BASE_POKEAPI_URL}/ability/${name}`)
  if (!res.ok) throw new Error(`Failed to fetch talent data for ${name}`)
  return res.json()
}

//──────────────────────────────────────────────────────────────────────────────
// DATA-FETCHING HOOKS (useGet…)
//──────────────────────────────────────────────────────────────────────────────
export const useGetNationalDex = () =>
  useQuery({
    queryKey: QUERY_KEYS.nationalDex,
    queryFn: fetchNationalDex,
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetNationalDexTyradex = () =>
  useQuery({
    queryKey: QUERY_KEYS.nationalDexTyradex,
    queryFn: fetchNationalDexTyradex,
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetPokemonDataByID = (id: string) =>
  useQuery({
    queryKey: QUERY_KEYS.pokemonDataByID(id),
    queryFn: () => fetchPokemonDataByID(id),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetPokemonsDataByUrls = (urls: string[]) => 
  useQuery({
    queryKey: QUERY_KEYS.pokemonsDataByUrls(urls),
    queryFn: () => fetchPokemonsDataByUrls(urls),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetPokemonSpeciesDataByID = (id: string) =>
  useQuery({
    queryKey: QUERY_KEYS.pokemonSpeciesDataByID(id),
    queryFn: () => fetchPokemonSpeciesDataByID(id),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetEvolutionChainByURL = (url: string) =>
  useQuery({
    queryKey: ['evolutionChain', url || ''],
    queryFn: () => fetchEvolutionChainByURL(url),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    enabled: !!url,
    ...DEFAULT_CACHE_OPTIONS,
  })


export const useGetAllTypes = () =>
  useQuery({
    queryKey: ['allTypes'],
    queryFn: fetchAllTypes,
    refetchOnMount: false,
    placeholderData: (prev) => prev,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetTypeDataByName = (name: string) =>
  useQuery({
    queryKey: QUERY_KEYS.typeDataByName(name),
    queryFn: () => fetchDataTypeByName(name),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    enabled: !!name,
    ...DEFAULT_CACHE_OPTIONS,
  })

export const useGetTalentDataByName = (name: string) =>
  useQuery({
    queryKey: ['talentData', name] as const,
    queryFn: () => fetchTalentDataByName(name),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    ...DEFAULT_CACHE_OPTIONS,
  })

//──────────────────────────────────────────────────────────────────────────────
// COMPOSITE HOOKS
//──────────────────────────────────────────────────────────────────────────────
export function useGetPokemonFullData(id: string) {
  const dataQuery = useGetPokemonDataByID(id)
  const speciesQuery = useGetPokemonSpeciesDataByID(id)

  return {
    pokemonData: dataQuery.data,
    pokemonSpeciesData: speciesQuery.data,
    isLoading: dataQuery.isLoading || speciesQuery.isLoading,
    isError: dataQuery.isError || speciesQuery.isError,
    error: dataQuery.error || speciesQuery.error,
  }
}

//──────────────────────────────────────────────────────────────────────────────
// PREFETCH HOOKS (usePrefetch…)
//──────────────────────────────────────────────────────────────────────────────
export const usePrefetchNationalDexTyradex = () => {
  const qc = useQueryClient()
  return () =>
    qc.ensureQueryData({
      queryKey: QUERY_KEYS.nationalDexTyradex,
      queryFn: fetchNationalDexTyradex,
      ...DEFAULT_CACHE_OPTIONS,
    })
}

export const usePrefetchPokemonDataByID = () => {
  const qc = useQueryClient()
  return (id: string) => {
    qc.ensureQueryData({
      queryKey: QUERY_KEYS.pokemonDataByID(id),
      queryFn: () => fetchPokemonDataByID(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonsDataByUrls = () => {
  const qc = useQueryClient()
  return (urls: string[]) => {
    qc.ensureQueryData({
      queryKey: QUERY_KEYS.pokemonsDataByUrls(urls),
      queryFn: () => fetchPokemonsDataByUrls(urls),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonSpeciesDataByID = () => {
  const qc = useQueryClient()
  return (id: string) => {
    qc.ensureQueryData({
      queryKey: QUERY_KEYS.pokemonSpeciesDataByID(id),
      queryFn: () => fetchPokemonSpeciesDataByID(id),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchEvolutionChainByURL = () => {
  const qc = useQueryClient()
  return (url: string) => {
    qc.ensureQueryData({
      queryKey: ['evolutionChain', url],
      queryFn: () => fetchEvolutionChainByURL(url),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchTypeDataByName = () => {
  const qc = useQueryClient()
  return (name: string) => {
    qc.ensureQueryData({
      queryKey: QUERY_KEYS.typeDataByName(name),
      queryFn: () => fetchDataTypeByName(name),
      ...DEFAULT_CACHE_OPTIONS,
    })
  }
}

export const usePrefetchPokemonFullData = () => {
  const prefetchData = usePrefetchPokemonDataByID()
  const prefetchSpecies = usePrefetchPokemonSpeciesDataByID()

  return (id: string) => {
    prefetchData(id)
    prefetchSpecies(id)
  }
}
