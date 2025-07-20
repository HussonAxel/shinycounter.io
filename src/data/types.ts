export interface PokemonDatabaseCardProps {
  pokemonName: string
  pokemonId: number
  pokemonImage: string
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

export interface PokemonFormsProps {
  condition: string
  name: string
  pokedex_id: string
  varieties: string[]
}
