import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'


import { ProgressBar } from '../ui/progress-indicator'
import useSound from 'use-sound'
import { Link } from '@tanstack/react-router'
import { useGetTalentDataByName } from '@/data/pokemons'
import { calculateMaxStatValue, calculateMinStatValue } from '@/lib/functions'

interface PokemonAbility {
  ability: {
    name: string
  }
}

interface CurrentPokemonRightProps {
  pokemonID: number
  pokemonDefaultName: string
  pokemonTypes: string[]
  pokemonFirstAppearance: string
  pokemonCategory: string
  pokemonWeight: number
  pokemonHeight: number
  pokemonAbilities?: PokemonAbility[]
  pokemonShape: string
  pokemonColor: string
  pokemonStats?: { base_stat: number; stat: { name: string } }[]
}

export default function CurrentPokemonRight({
  pokemonID,
  pokemonDefaultName,
  pokemonTypes,
  pokemonFirstAppearance,
  pokemonCategory,
  pokemonWeight,
  pokemonHeight,
  pokemonAbilities,
  pokemonShape, 
  pokemonColor,
  pokemonStats = [],
}: CurrentPokemonRightProps) {
  const [playPokemonLegacyCry] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/${pokemonID}.ogg`,
    { volume: 0.5 },
  )
  const [playPokemonLatestCry] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonID}.ogg`,
    { volume: 0.5 },
  )

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-800 w-3/5 p-6 rounded-lg shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white capitalize mb-4">
          {pokemonDefaultName} -
          <span className="text-gray-500"> #{pokemonID}</span>
        </h2>
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {pokemonTypes.map((type, index) => (
              <Link to={`/type/$type`} key={index} params={{ type }}>
                <Badge
                  variant="secondary"
                  className={`bg-${type} text-white dark:bg-${type} font-bold text-xs sm:text-sm uppercase px-3 py-2 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <img
                    src={`/assets/static/pkmnsTypes/${type}.svg`}
                    alt={type}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="hidden sm:inline">{type}</span>
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-md font-semibold  text-[#1A1A1A] dark:text-gray-300 mb-3">
          Sons
        </h3>
        <div className="flex gap-3">
          <Button
            onClick={() => playPokemonLatestCry()}
            className="bg-white dark:bg-gray-700 text-[#1A1A1A] dark:text-white capitalize font-semibold ring-1 ring-gray-200 dark:ring-gray-600 transition-all duration-200 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600 hover:ring-gray-300 dark:hover:ring-gray-500"
          >
            Latest Cry
          </Button>
          <Button
            onClick={() => playPokemonLegacyCry()}
            className="bg-white dark:bg-gray-700 text-[#1A1A1A] dark:text-white capitalize font-semibold ring-1 ring-gray-200 dark:ring-gray-600 transition-all duration-200 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600 hover:ring-gray-300 dark:hover:ring-gray-500"
          >
            Legacy Cry
          </Button>
        </div>
      </div>

      {pokemonAbilities && (
        <div className="mb-8">
          <h3 className="text-md font-semibold  text-[#1A1A1A] dark:text-gray-300 mb-3">
            Capacités
          </h3>
          <div className="flex flex-wrap gap-2">
            {pokemonAbilities.map((ability, index) => {
              const { data: talentData } = useGetTalentDataByName(
                ability.ability.name,
              )

              return (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-xs sm:text-sm capitalize hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {ability.ability.name.replace('-', ' ')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="max-w-[380px] py-3 shadow-none"
                    side="top"
                    align="start"
                  >
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm line-clamp-6">
                          {talentData?.effect_entries?.find(
                            (entry: { language: { name: string } }) =>
                              entry.language.name === 'en',
                          )?.effect || 'Description non disponible'}
                        </p>
                      </div>
                      <Link
                        to="/talent/$talent"
                        params={{ talent: ability.ability.name }}
                      >
                        <Button size="sm" className="h-7 px-2">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </PopoverContent>
                </Popover>
              )
            })}
          </div>
        </div>
      )}

      <div className="mb-8 space-y-3">
        <h3 className="text-md font-semibold  text-[#1A1A1A] dark:text-gray-300 mb-3">
          Informations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Generation</span>
            <p className="font-semibold text-[#1A1A1A] dark:text-white uppercase">
              {pokemonFirstAppearance}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Category</span>
            <p className="font-semibold text-[#1A1A1A] dark:text-white capitalize">
              {pokemonCategory}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Weight</span>
            <p className="font-semibold text-[#1A1A1A] dark:text-white">
              {pokemonWeight} kg
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Height</span>
            <p className="font-semibold text-[#1A1A1A] dark:text-white">
              {pokemonHeight} m
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Shape</span>
            <p className="font-semibold text-[#1A1A1A] dark:text-white capitalize">
              {pokemonShape}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Color(s)</span>
            <p className="font-semibold text-[#1A1A1A] dark:text-white capitalize">
              {pokemonColor}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-md font-semibold  text-[#1A1A1A] dark:text-gray-300 mb-3">
          Stats
        </h3>
        <div className="grid grid-cols-1 gap-3 text-sm">
          {pokemonStats.map((stat, index) => {
            return (
              <div key={index} className='flex flex-row items-center gap-4 justify-between'>
                <p className='capitalize'>{stat.name} - {stat.base_stat}</p>
                <ProgressBar
                  className="bg-red-400 [&>div]:!bg-blue-500 w-3/4 "
                  min={0}
                  max={200}
                  value={stat.base_stat}
                />
              <p>{calculateMinStatValue(stat.base_stat, stat.name)}</p>
              <p>{calculateMaxStatValue(stat.base_stat, stat.name)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
