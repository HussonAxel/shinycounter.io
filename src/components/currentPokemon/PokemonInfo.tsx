interface PokemonInfoProps {
  pokemonFirstAppearance: string
  pokemonCategory: string
  pokemonWeight: number
  pokemonHeight: number
  pokemonShape: string
  pokemonColor: string
}

export default function PokemonInfo({
  pokemonFirstAppearance,
  pokemonCategory,
  pokemonWeight,
  pokemonHeight,
  pokemonShape,
  pokemonColor,
}: PokemonInfoProps) {
  return (
    <div className="mb-8 space-y-3">
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Informations
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
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
  )
}
