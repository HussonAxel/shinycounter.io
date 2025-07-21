interface CurrentPokemonLeftProps {
  pokemonJapaneseName: string
  pokemonDefaultName: string
  pokemonID: number
}

import { Button } from '../ui/button'

import { useState } from 'react'
export default function CurrentPokemonLeft({
  pokemonJapaneseName,
  pokemonDefaultName,
  pokemonID,
}: CurrentPokemonLeftProps) {
  const [isShiny, setIsShiny] = useState(false)
  const handleClick = () => {
    setIsShiny(!isShiny)
  }
  return (
    <div className="min-h-[35vh] md:h-[calc(100vh-68px)] bg-gray-100 w-full md:w-2/5 flex flex-col items-center justify-center sm:p-6 md:sticky top-0 overflow-y-auto">
      <h2 className="hidden md:block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#1A1A1A]/33 mb-2 sm:mb-4 text-center leading-tight">
        {pokemonJapaneseName}
      </h2>
      <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-[#1A1A1A] mb-4 sm:mb-2 text-center leading-tight">
        {pokemonDefaultName}
      </h3>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center my-4 sm:my-6 md:my-8">
        <img
          src={`/assets/static/sprites/${isShiny ? 'shiny' : 'base'}/${pokemonID}.webp`}
          alt={pokemonDefaultName}
          className="w-20 h-20 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />
      </div>

      <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 w-full max-w-xs xs:max-w-sm sm:max-w-md">
        <Button
          onMouseDown={handleClick}
          className="w-full xs:flex-1 py-2 px-3 xs:py-3 xs:px-4 text-xs xs:text-sm sm:text-base bg-white text-black uppercase font-semibold ring ring-gray-200 transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300"
        >
          {isShiny ? 'Normal' : 'Shiny'} Pokémon
        </Button>
        <Button className="w-full xs:flex-1 py-2 px-3 xs:py-3 xs:px-4 text-xs xs:text-sm sm:text-base bg-white text-black uppercase font-semibold ring ring-gray-200 transition duration-200 active:scale-95 hover:bg-gray-100 hover:ring-gray-300">
          Start Hunt
        </Button>
      </div>
    </div>
  )
}
