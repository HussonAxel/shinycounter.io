import { ProgressBar } from '../ui/progress-indicator'
import { calculateMaxStatValue, calculateMinStatValue } from '@/lib/functions'

interface PokemonStatsProps {
  pokemonStats: { base_stat: number; name: string }[]
}

export default function PokemonStats({ pokemonStats }: PokemonStatsProps) {
  const totalStats = pokemonStats.reduce((sum, stat) => sum + stat.base_stat, 0)

  return (
    <div className="mb-8 space-y-3">
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Stats
      </h3>
      <div className="space-y-2">
        {pokemonStats.map((stat, index) => {
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm"
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-3">
                  <p className="capitalize text-sm font-medium text-gray-700 dark:text-gray-300">
                    {stat.name}
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-sm font-semibold text-[#1A1A1A] dark:text-white">
                    {stat.base_stat}
                  </p>
                </div>
                <div className="col-span-5">
                  <ProgressBar
                    className="bg-gray-200 dark:bg-gray-600 [&>div]:!bg-orange-400 h-2 rounded-full w-1/2 md:w-full"
                    min={0}
                    max={200}
                    value={stat.base_stat}
                  />
                </div>
                <div className="col-span-2 flex justify-end gap-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 min-w-[3rem] text-right">
                    {calculateMinStatValue(stat.base_stat, stat.name)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 min-w-[3rem] text-right">
                    {calculateMaxStatValue(stat.base_stat, stat.name)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <p className="text-sm font-bold text-[#1A1A1A] dark:text-white">
                Total
              </p>
            </div>
            <div className="col-span-2 text-center">
              <p className="text-sm font-bold text-[#1A1A1A] dark:text-white">
                {totalStats}
              </p>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-2 flex justify-end gap-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 min-w-[3rem] text-right font-medium">
                Min
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 min-w-[3rem] text-right font-medium">
                Max
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
