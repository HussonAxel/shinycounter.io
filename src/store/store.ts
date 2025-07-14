import { create } from 'zustand'
import { shared } from 'use-broadcast-ts'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { PokemonActions, PokemonState } from './types'

const initialSearchedPokemon = null

const useStore = create<PokemonState & PokemonActions>()(
  shared(
    persist<PokemonState & PokemonActions>(
      (set) => ({
        counter: 0,
        currentPokemon: initialSearchedPokemon,
        addEntries: () =>
          set((state) => ({ counter: (state?.counter ?? 0) + 1 })),
        removeEntries: () =>
          set((state) => ({ counter: (state?.counter ?? 0) - 1 })),
        resetEntries: () => set({ counter: 0 }),
      }),
      {
        name: 'SearchPokemon-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
)

export default useStore
