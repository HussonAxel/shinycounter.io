import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Link } from '@tanstack/react-router'
import { useGetTalentDataByName } from '@/data/pokemons'

interface PokemonAbility {
  ability: {
    name: string
  }
}

interface PokemonAbilitiesProps {
  pokemonAbilities?: PokemonAbility[]
}

function AbilityPopover({ abilityName }: { abilityName: string }) {
  const { data: talentData } = useGetTalentDataByName(abilityName)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="text-xs sm:text-sm capitalize hover:bg-gray-50 dark:hover:bg-gray-700 hover:cursor-help"
        >
          {abilityName.replace('-', ' ')}
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
            params={{ talent: abilityName }}
          >
            <Button size="sm" className="h-7 px-2">
              Details
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function PokemonAbilities({
  pokemonAbilities,
}: PokemonAbilitiesProps) {
  if (!pokemonAbilities) return null

  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Capacités
      </h3>
      <div className="flex flex-wrap gap-2">
        {pokemonAbilities.map((ability, index) => (
          <AbilityPopover
            key={index}
            abilityName={ability.ability.name}
          />
        ))}
      </div>
    </div>
  )
}
