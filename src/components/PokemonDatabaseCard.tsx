import { useSearch } from '@tanstack/react-router'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'
import { BadgeCheckIcon } from 'lucide-react'

export default function PokemonDatabaseCard() {
  const searchedPokemon = useSearch({
    from: '/',
    select: (search) => search.searchTerm,
  })

  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md gap-8 mx-8 my-4">
      <Card className="hover:shadow-lg transition-all active:bg-gray-50 active:scale-[97%] active:shadow-xl">
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
      <Card>
        <a href="#">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Pokemon"
              className="w-full m-auto max-w-[150px]"
            />
            <CardTitle>Bulbasaur</CardTitle>
            <CardDescription>#001</CardDescription>
            <CardDescription className="text-center text-black flex gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>{' '}
            </CardDescription>
          </CardHeader>
        </a>
      </Card>
    </article>
  )
}
