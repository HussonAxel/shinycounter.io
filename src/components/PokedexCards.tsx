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
import { Link } from '@tanstack/react-router'

import { usePrefetchPokemon, useGetPokemonByIdPokeAPI } from '@/data/pokemons'
import { useState } from 'react'

export default function PokemonDatabaseCard({
  pokemonName,
  pokemonId,
  pokemonImage,
  pokemonTypes,
}: PokemonDatabaseCardProps) {
  const prefetchPokemon = usePrefetchPokemon()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const { data: pokemonDetails, isLoading: isLoadingDetails } = useGetPokemonByIdPokeAPI(
    isDialogOpen ? pokemonId.toString() : ''
  )

  const getProgressColor = (value: number) => {
    if (value >= 120) return '#30c750' // Vert fluo
    if (value >= 100) return '#4ee44e' // Vert
    if (value >= 60) return '#ffeb3b' // Jaune
    if (value >= 1) return '#ff9800' // Orange
    return '#f44336'
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Card
          className="hover:shadow-lg hover:scale-105 transition-all active:bg-gray-50 active:scale-[100%] active:shadow-xl cursor-pointer rounded-none sm:rounded-md"
          onMouseEnter={() => {
            prefetchPokemon(pokemonId.toString())
          }}
        >
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src={pokemonImage}
              alt={pokemonName}
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle className="capitalize">{pokemonName}</CardTitle>
            <CardDescription>#{pokemonId}</CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-none bg-[#fafafa]"
      >
        <DialogHeader className="flex flex-row w-full items-center gap-2 justify-between">
          <DialogTitle className="capitalize text-2xl">
            {pokemonName} - #{pokemonId}
          </DialogTitle>
          <div>
            {pokemonDetails?.types?.map((type: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className={`bg-${type.type.name} text-white dark:bg-${type.type.name} font-semibold first:mr-2 text-sm`}
              >
                {type.type.name}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="w-full border-t flex justify-center items-center">
          <img
            src={pokemonImage}
            alt={pokemonName}
            className="h-24 w-24 md:h-48 md:w-48 object-contain"
          />
        </div>

        {isDialogOpen && (
          <article className="grid bg-white p-4 border border-[#e7e7e7] rounded-md">
            <div>
              <h2 className="font-semibold text-xl mb-4">Basic Info</h2>
              {isLoadingDetails ? (
                <div className="flex justify-center py-4">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row w-full justify-between">
                    <p className="opacity-80">Height:</p>
                    <p>{pokemonDetails?.height || 'N/A'}</p>
                  </div>
                  <div className="flex flex-row w-full justify-between">
                    <p className="opacity-80">Weight:</p>
                    <p>{pokemonDetails?.weight || 'N/A'}</p>
                  </div>
                  <div className="flex flex-row w-full justify-between">
                    <p className="opacity-80">Abilities:</p>
                    <div className="flex flex-wrap gap-1">
                      {pokemonDetails?.abilities?.map(
                        (talent: any, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {talent.ability.name}
                          </Badge>
                        ),
                      ) || 'N/A'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        )}

        <article className="grid bg-white p-4 border border-[#e7e7e7] rounded-md">
          <div>
            <h2 className="font-semibold text-xl mb-4">Base Stats</h2>
            <div className="flex flex-col gap-2">
              {pokemonDetails &&
                Object.entries(pokemonDetails.stats).map(
                  ([statName, statValue]) => (
                    <div
                      key={statName}
                      className="grid grid-cols-[80px_1fr_50px] items-center gap-4"
                    >
                      <p className="capitalize  ">
                        {pokemonDetails.stats[statName].stat.name.replace(
                          '_',
                          '. ',
                        )}
                        :
                      </p>
                      <Progress
                        style={
                          {
                            '--progress-color': getProgressColor(
                              Number(statValue),
                            ),
                          } as React.CSSProperties
                        }
                        className="[&>div]:bg-[var(--progress-color)]"
                        value={
                          (pokemonDetails.stats[statName].base_stat / 150) *
                          100
                        }
                      />
                      <p className="font-semibold text-right">
                        {pokemonDetails.stats[statName].base_stat}
                      </p>
                    </div>
                  ),
                )}
            </div>

          </div>
        </article>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Link
            to="/hunt/$pokemon"
            params={{ pokemon: pokemonName.toLowerCase() }}
            search={{}}
          >
            <Button
              type="submit"
              className="w-full"
              onMouseDown={() => prefetchPokemon(pokemonId.toString())}
            >
              Start Hunt
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
