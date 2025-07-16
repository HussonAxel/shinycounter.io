import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import useSound from 'use-sound'
import { useGetTalentDataByName } from '@/data/pokemons'

// Types pour les données Pokémon
interface PokemonAbility {
  ability: {
    name: string
  }
}

interface TalentData {
  effect_entries: Array<{
    language: {
      name: string
    }
    effect: string
  }>
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
}: CurrentPokemonRightProps) {
  // Sons des Pokémon
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
      {/* En-tête avec nom et ID */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
          {pokemonDefaultName}{' '}
          <span className="text-gray-500">#{pokemonID}</span>
        </h2>
      </div>

      {/* Types du Pokémon */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Types
        </h3>
        <div className="flex flex-wrap gap-2">
          {pokemonTypes.map((type, index) => (
            <Badge
              key={index}
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
          ))}
        </div>
      </div>

      {/* Boutons de sons */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Sons
        </h3>
        <div className="flex gap-3">
          <Button
            onClick={() => playPokemonLatestCry()}
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white uppercase font-semibold ring-1 ring-gray-200 dark:ring-gray-600 transition-all duration-200 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600 hover:ring-gray-300 dark:hover:ring-gray-500"
          >
            Latest Cry
          </Button>
          <Button
            onClick={() => playPokemonLegacyCry()}
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white uppercase font-semibold ring-1 ring-gray-200 dark:ring-gray-600 transition-all duration-200 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600 hover:ring-gray-300 dark:hover:ring-gray-500"
          >
            Legacy Cry
          </Button>
        </div>
      </div>

      {/* Informations du Pokémon */}
      <div className="mb-6 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Informations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Génération</span>
            <p className="font-semibold text-gray-900 dark:text-white uppercase">
              {pokemonFirstAppearance}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Catégorie</span>
            <p className="font-semibold text-gray-900 dark:text-white capitalize">
              {pokemonCategory}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Poids</span>
            <p className="font-semibold text-gray-900 dark:text-white">
              {pokemonWeight} kg
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <span className="text-gray-500 dark:text-gray-400">Taille</span>
            <p className="font-semibold text-gray-900 dark:text-white">
              {pokemonHeight} m
            </p>
          </div>
        </div>
      </div>

      {/* Capacités */}
      {pokemonAbilities && pokemonAbilities.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Capacités
          </h3>
          <div className="flex flex-wrap gap-2">
            {pokemonAbilities.map((ability, index) => {
              const { data: talentData, isLoading } = useGetTalentDataByName(
                ability.ability.name,
              )

              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-xs sm:text-sm capitalize hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {ability.ability.name.replace('-', ' ')}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    {isLoading ? (
                      <p className="text-sm">Chargement...</p>
                    ) : (
                      <p className="text-sm">
                        {talentData?.effect_entries?.find(
                          (entry: { language: { name: string } }) =>
                            entry.language.name === 'en',
                        )?.effect || 'Description non disponible'}
                      </p>
                    )}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
