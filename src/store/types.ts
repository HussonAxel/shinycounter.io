export interface PokemonState {
  currentPokemon: any | null
  counter: number | null
}

export interface PokemonActions {
  addEntries: (newEntries: any) => void
  removeEntries: (length: number) => void
  resetEntries: () => void
}
