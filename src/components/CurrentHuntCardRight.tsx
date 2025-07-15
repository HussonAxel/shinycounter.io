import type { CurrentHuntCardProps } from '@/data/types'
import { Badge } from './ui/badge'
import { CalendarClock, Play, Plus, TimerReset } from 'lucide-react'
import { Button } from './ui/button'
import { Progress } from './ui/progress'

export default function CurrentHuntCardRight({
  pokemonId,
  pokemonName,
  pokemonPokeAPI,
  pokemonTyradex,
  pokemonJapanaseName,
  pokemonFrenchName,
  pokemonImage,
  currentProgress,
}: CurrentHuntCardProps) {
  return (
    <article className="w-full lg:w-3/4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 sm:pt-4 px-4 sm:px-8 lg:px-16 gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
          {pokemonFrenchName} - #{pokemonId.toString().padStart(3, '0')}
        </h1>
        <Badge
          variant="secondary"
          className="bg-gray-200 py-1 sm:py-2 px-2 sm:px-4 rounded-full text-[#1A1A1A] text-xs sm:text-md items-center align-middle flex flex-row gap-1 sm:gap-2"
        >
          <CalendarClock className="!w-3 !h-3 sm:!w-4 sm:!h-4" />
          <span className="hidden sm:inline">June 2023</span>
          <span className="sm:hidden">2023</span>
        </Badge>
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-4 px-4 sm:px-8 lg:px-16 opacity-65 mt-2 sm:mt-0">
        <p className="text-sm sm:text-base">0h 12min 34s </p>
        <Play className="w-3 h-3 sm:w-4 sm:h-4 hover:opacity-100 cursor-pointer shadow-2xs hover:scale-[110%] active:scale-[90%] transition-all duration-100" />
        <TimerReset className="w-3 h-3 sm:w-4 sm:h-4 hover:opacity-100 cursor-pointer shadow-2xs hover:scale-[110%] active:scale-[90%] transition-all duration-100" />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-4 sm:px-8 lg:px-16 justify-between mt-4 sm:mt-8">
        <div className="flex flex-row items-center gap-2 mb-2 sm:mb-4 w-full sm:w-auto">
          <div className="w-[20px] sm:w-[42px] h-[1px] bg-black"></div>
          <p className="text-sm sm:text-base">
            {currentProgress} RE(s) -{' '}
            {(((currentProgress ?? 0) / 4096) * 100).toFixed(2)}%
          </p>
        </div>
        <p className="text-sm sm:text-base text-right w-full sm:w-auto">
          4096 RE(s)
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 px-4 sm:px-8 lg:px-16">
        <Progress
          value={((currentProgress ?? 0) / 4096) * 100}
          className="w-full h-2 sm:h-3 [&>div]:bg-[#EF4444]"
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-6 sm:mt-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-lg sm:text-xl lg:text-2xl">Details of the hunt</h2>
      </div>
    </article>
  )
}
