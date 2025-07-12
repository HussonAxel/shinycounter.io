import { useSearch } from '@tanstack/react-router'

import { useGetSinglePokemon } from '@/data/pokemons'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Progress } from './ui/progress'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BadgeCheckIcon } from 'lucide-react'

// Fixed component
interface PokemonDatabaseCardProps {
  pokemonName: string
}

export default function PokemonDatabaseCard({
  pokemonName,
}: PokemonDatabaseCardProps) {
  const pokemon = useGetSinglePokemon(pokemonName)
  const pokemonData = pokemon.data // Fix: Define pokemonData

  if (pokemon.isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="w-[150px] h-[150px] bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </CardHeader>
      </Card>
    )
  }

  if (pokemon.isError) {
    return <div>Error loading Pokemon</div>
  }

  if (!pokemonData) {
    return null
  }

  // Helper functions for better code organization
  const getPokemonNumber = () => {
    return `#${pokemonData.id.toString().padStart(3, '0')}`
  }

  const getTypeColor = (type: string) => {
    const colors = {
      grass: 'bg-green-500',
      poison: 'bg-purple-500',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-500',
      // Add more as needed
    }
    return colors[type.toLowerCase()] || 'bg-gray-500'
  }

  const formatHeight = (height: number) => {
    return `${(height / 10).toFixed(1)} m` // API returns in decimeters
  }

  const formatWeight = (weight: number) => {
    return `${(weight / 10).toFixed(1)} kg` // API returns in hectograms
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:shadow-lg hover:scale-105 transition-all active:bg-gray-50 active:scale-[100%] active:shadow-xl cursor-pointer">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src={
                pokemonData.sprites?.other?.['official-artwork']
                  ?.front_default ||
                pokemonData.sprites?.front_default ||
                `assets/static/sprites/base/${pokemonData.id}.webp`
              }
              alt={pokemonData.name}
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle className="capitalize">{pokemonData.name}</CardTitle>
            <CardDescription>{getPokemonNumber()}</CardDescription>
            <CardDescription className="text-center text-black flex gap-2">
              {pokemonData.types?.map((typeInfo) => (
                <Badge
                  key={typeInfo.type.name}
                  variant="secondary"
                  className={`${getTypeColor(typeInfo.type.name)} text-white`}
                >
                  <BadgeCheckIcon className="w-3 h-3 mr-1" />
                  {typeInfo.type.name}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-none bg-[#fafafa]">
        <DialogHeader className="flex flex-row w-full items-center gap-2">
          <DialogTitle className="capitalize">
            {pokemonData.name} - {getPokemonNumber()}
          </DialogTitle>
          {pokemonData.types?.map((typeInfo) => (
            <Badge
              key={typeInfo.type.name}
              variant="secondary"
              className={`${getTypeColor(typeInfo.type.name)} text-white`}
            >
              <BadgeCheckIcon className="w-3 h-3 mr-1" />
              {typeInfo.type.name}
            </Badge>
          ))}
        </DialogHeader>

        <div className="w-full border-t">
          <img
            src={
              pokemonData.sprites?.other?.['official-artwork']?.front_default ||
              pokemonData.sprites?.front_default
            }
            alt={pokemonData.name}
            className="w-full h-auto max-w-[300px] mx-auto"
          />
        </div>

        <article className="grid bg-white p-4 border border-[#e7e7e7] rounded-md">
          <div>
            <h2 className="font-semibold text-xl mb-4">Basic Info</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full justify-between">
                <p className="opacity-80">Height:</p>
                <p>{formatHeight(pokemonData.height)}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <p className="opacity-80">Weight:</p>
                <p>{formatWeight(pokemonData.weight)}</p>
              </div>
              <div className="flex flex-row w-full justify-between">
                <p className="opacity-80">Abilities:</p>
                <p>
                  {pokemonData.abilities
                    ?.map((ability) => ability.ability.name)
                    .join(', ')}
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="grid bg-white p-4 border border-[#e7e7e7] rounded-md">
          <div>
            <h2 className="font-semibold text-xl mb-4">Base Stats</h2>
            <div className="flex flex-col gap-2">
              {pokemonData.stats?.map((stat) => (
                <div
                  key={stat.stat.name}
                  className="grid grid-cols-[80px_1fr_50px] items-center gap-4"
                >
                  <p className="font-semibold uppercase">
                    {stat.stat.name.replace('-', '.')}:
                  </p>
                  <Progress value={(stat.base_stat / 255) * 100} />
                  <p className="font-bold text-right">{stat.base_stat}</p>
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
