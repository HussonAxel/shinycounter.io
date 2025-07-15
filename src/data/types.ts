export interface PokemonDatabaseCardProps {
  pokemonName: string
  pokemonId: number
  pokemonImage: string
  pokemonTypes?: string[]
  pokemonStats?: string[]
  currentProgress: number | null
}

export interface CurrentHuntCardProps {
  pokemonId: string
  pokemonName: string
  pokemonPokeAPI: any
  pokemonTyradex: any
  pokemonJapanaseName: string
  pokemonFrenchName: string
  pokemonImage: string
  currentProgress: number | null
}
