import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'

import type { PokemonDatabaseCardProps } from '@/data/types'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export default function PokemonDatabaseCard({
  pokemonName,
  pokemonId,
  pokemonImage,
  pokemonTypes,
  pokemonStats,
  pokemonHeight,
  pokemonWeight,
  pokemonAbilities,
}: PokemonDatabaseCardProps) {
  const abilities = pokemonAbilities?.map((ability: any) => {
    return `${ability.name} ${ability.tc ? '(TC)' : ''}`
  })
  const summaryAbilities = abilities?.join(', ')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:shadow-lg hover:scale-105 transition-all active:bg-gray-50 active:scale-[100%] active:shadow-xl cursor-pointer rounded-none sm:rounded-md">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src={pokemonImage}
              alt={pokemonName}
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle className="capitalize">{pokemonName}</CardTitle>
            <CardDescription>#{pokemonId}</CardDescription>
            <CardDescription className="text-center text-black flex gap-2">
              {pokemonTypes?.map((type: any, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`bg-${type.name} text-white dark:bg-${type.name} font-semibold`}
                >
                  {type.name || type}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-none bg-[#fafafa]">
        <DialogHeader className="flex flex-row w-full items-center gap-2">
          <DialogTitle className="capitalize">
            {pokemonName} - {pokemonId}
          </DialogTitle>
          {pokemonTypes?.map((type: any, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className={`bg-${type.name} text-white dark:bg-${type.name} font-semibold`}
            >
              {type.name || type}
            </Badge>
          ))}
        </DialogHeader>

        <div className="w-full border-t flex justify-center items-center">
          <img
            src={pokemonImage}
            alt={pokemonName}
            className="h-32 w-32 object-contain"
          />
        </div>

        <article className="grid bg-white p-4 border border-[#e7e7e7] rounded-md">
          <div>
            <h2 className="font-semibold text-xl mb-4">Basic Info</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full justify-between">
                <p className="opacity-80">Height:</p>
                <p>{pokemonHeight}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <p className="opacity-80">Weight:</p>
                <p>{pokemonWeight}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <p className="opacity-80">Abilities:</p>
                <p>{summaryAbilities}</p>
              </div>
            </div>
          </div>
        </article>

        <article className="grid bg-white p-4 border border-[#e7e7e7] rounded-md">
          <div>
            <h2 className="font-semibold text-xl mb-4">Base Stats</h2>
            <div className="flex flex-col gap-2">
              {pokemonStats &&
                Object.entries(pokemonStats).map(([statName, statValue]) => (
                  <div
                    key={statName}
                    className="grid grid-cols-[80px_1fr_50px] items-center gap-4"
                  >
                    <p className="font-semibold uppercase">
                      {statName.replace('_', '.')}:
                    </p>
                    <Progress value={(Number(statValue) / 255) * 100} />
                    <p className="font-bold text-right">{statValue}</p>
                  </div>
                ))}
            </div>
          </div>
        </article>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Start Hunt</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
