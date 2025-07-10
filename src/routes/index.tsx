import { createFileRoute } from '@tanstack/react-router'
import CurrentHuntCard from '@/components/CurrentHuntCard'
import PokemonDatabaseCard from '@/components/PokemonDatabaseCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-amber-600"
          >
            Current Hunts
          </TabsTrigger>
          <TabsTrigger value="password">Pokemon Database</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CurrentHuntCard />
        </TabsContent>
        <TabsContent value="password">
          <PokemonDatabaseCard />
        </TabsContent>
      </Tabs>{' '}
    </div>
  )
}
