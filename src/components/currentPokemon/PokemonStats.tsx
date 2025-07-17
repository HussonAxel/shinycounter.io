import { ProgressBar } from '../ui/progress-indicator'
import { calculateMaxStatValue, calculateMinStatValue } from '@/lib/functions'

interface PokemonStatsProps {
  pokemonStats: { base_stat: number; stat: { name: string } }[]
}

export default function PokemonStats({ pokemonStats }: PokemonStatsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Stats
      </h3>
      <div className="grid grid-cols-1 gap-3 text-sm">
        {pokemonStats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center gap-4 justify-between"
            >
              <p className="capitalize">
                {stat.name} - {stat.base_stat}
              </p>
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
  )
}
