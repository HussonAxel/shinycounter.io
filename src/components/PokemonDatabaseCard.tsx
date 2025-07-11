import { useSearch } from '@tanstack/react-router'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function PokemonDatabaseCard() {
  const searchedPokemon = useSearch({
    from: '/',
    select: (search) => search.searchTerm,
  })

  return (
    <article className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md gap-8 mx-8 my-4">
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Pokemon"
            className="w-full m-auto max-w-[150px]"
          />
          <CardTitle>Bulbasaur</CardTitle>
          <CardDescription>#001</CardDescription>
          <CardDescription className="text-center text-black flex gap-4">
            <p className=" bg-green-500 py-1 px-2 rounded-sm">GRASS</p>
            <p className="bg-purple-500 py-1 px-2 rounded-sm">POISON</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </article>
  )
}
