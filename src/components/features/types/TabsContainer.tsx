import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import TypeDamageRelations from "./TypeDamageRelations"
import TypePokemons from "./$typePokemons"

import {
  useGetTypeDataByName,
  usePrefetchPokemonDataByID,
} from '@/data/pokemons'
import { useParams } from "@tanstack/react-router"

import { extractPokemonIdFromUrl } from "@/lib/functions"



export default function ComponentTabs436() {

    const type = useParams({
      from: '/type/$type',
      select: (params) => params.type,
    })

    const prefetchPokemonDataByID = usePrefetchPokemonDataByID()

    const { data, isLoading, error } = useGetTypeDataByName(type)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data found</div>

const handleOnMouseEnter = () => {
  data.pokemon.forEach((pokemon: any) => {
    prefetchPokemonDataByID(extractPokemonIdFromUrl(pokemon.pokemon.url)) 
  })
}

  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="before:bg-border relative mb-3 h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px">
          <TabsTrigger
            value="tab-1"
            className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          >
            <HouseIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Type Damage Relations
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
            onMouseEnter={handleOnMouseEnter}
          >
            <PanelsTopLeftIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Pokemons
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          >
            <BoxIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Moves
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <div className="text-muted-foreground p-4 pt-1 text-center text-xs">
          <TypeDamageRelations />
        </div>
      </TabsContent>
      <TabsContent value="tab-2">
        <div className="text-muted-foreground p-4 pt-1 text-center text-xs">
          <TypePokemons />
        </div>
      </TabsContent>
      <TabsContent value="tab-3">
        <div className="text-muted-foreground p-4 pt-1 text-center text-xs">
          Content for Tab 3
        </div>
      </TabsContent>
    </Tabs>
  )
}
