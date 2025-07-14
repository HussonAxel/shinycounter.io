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
    <article className="w-3/4">
      <div className="flex flex-row justify-between items-center pt-4 px-16">
        <h1 className="text-2xl">
          {pokemonFrenchName} - #{pokemonId.toString().padStart(3, '0')}
        </h1>
        <Badge
          variant="secondary"
          className="bg-gray-200 py-2 px-4 rounded-full text-[#1A1A1A] text-md items-center align-middle flex flex-row gap-2"
        >
          <CalendarClock className="!w-4 !h-4" />
          June 2023
        </Badge>
      </div>
      <div className="flex flex-row items-center gap-4 px-16 opacity-65">
        <p>0h 12min 34s </p>
        <Play className="w-4 h-4 hover:opacity-100 cursor-pointer shadow-2xs hover:scale-[110%] active:scale-[90%] transition-all duration-100" />
        <TimerReset className="w-4 h-4 hover:opacity-100 cursor-pointer shadow-2xs hover:scale-[110%] active:scale-[90%] transition-all duration-100" />
      </div>
      <div className="flex flex-row items-center gap-4 px-16 justify-between mt-8">
        <div className="flex flex-row items-center gap-2 mb-4">
          <div className="w-[42px] h-[1px] bg-black"></div>
          <p>
            {currentProgress} RE(s) -{' '}
            {(((currentProgress ?? 0) / 4096) * 100).toFixed(2)}%
          </p>
        </div>
        <p>4096 RE(s)</p>
      </div>
      <div className="flex flex-row items-center gap-4 px-16">
        <Progress
          value={((currentProgress ?? 0) / 4096) * 100}
          className="w-full h-3 [&>div]:bg-[#EF4444]"
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-12 px-16">
        <h2 className="text-2xl">Details of the hunt</h2>
      </div>
    </article>
  )
}
