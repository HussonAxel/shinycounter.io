import { useState } from 'react'
import { useParams, Link } from '@tanstack/react-router'
import {
  useGetTypeDataByName,
  useGetAllTypes,
  usePrefetchTypeDataByName,
} from '@/data/pokemons'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

import { Badge } from '@/components/ui/badge'

export default function TypeDamageRelations() {
  const [tab, setTab] = useState<'from' | 'to'>('from')

  const prefetchTypeData = usePrefetchTypeDataByName()
  const { type: typeName } = useParams({ from: '/type/$type' })
  const { data, isLoading, error } = useGetTypeDataByName(typeName)
  const {
    data: allTypes,
    isLoading: isLoadingAllTypes,
    error: errorAllTypes,
  } = useGetAllTypes()

  if (isLoading || isLoadingAllTypes) return <div>Loading...</div>
  if (error || errorAllTypes)
    return <div>Error: {error?.message || errorAllTypes?.message}</div>
  if (!data) return <div>No data found</div>

  const DOUBLE_DAMAGES_FROM = data.damage_relations.double_damage_from.map(
    (type: { name: string }) => type.name,
  )
  const HALF_DAMAGES_FROM = data.damage_relations.half_damage_from.map(
    (type: { name: string }) => type.name,
  )
  const NO_DAMAGES_FROM = data.damage_relations.no_damage_from.map(
    (type: { name: string }) => type.name,
  )
  const DOUBLE_DAMAGES_TO = data.damage_relations.double_damage_to.map(
    (type: { name: string }) => type.name,
  )
  const HALF_DAMAGES_TO = data.damage_relations.half_damage_to.map(
    (type: { name: string }) => type.name,
  )
  const NO_DAMAGES_TO = data.damage_relations.no_damage_to.map(
    (type: { name: string }) => type.name,
  )

  // Calcul du multiplicateur pour chaque type
  const typesFilteredFrom = allTypes.results
    .filter(
      (type: { name: string }) =>
        type.name !== 'unknown' && type.name !== 'stellar',
    )
    .map((type: { name: any }) => {
      const doubleDamageFrom = DOUBLE_DAMAGES_FROM.includes(type.name)
      const halfDamageFrom = HALF_DAMAGES_FROM.includes(type.name)
      const noDamageFrom = NO_DAMAGES_FROM.includes(type.name)

      let multiplier = 1
      if (noDamageFrom) multiplier = 0
      else {
        if (doubleDamageFrom) multiplier *= 2
        if (halfDamageFrom) multiplier *= 0.5
      }

      return {
        name: type.name,
        multiplier,
      }
    })

  const typesFilteredTo = allTypes.results
    .filter(
      (type: { name: string }) =>
        type.name !== 'unknown' && type.name !== 'stellar',
    )
    .map((type: { name: any }) => {
      const doubleDamageTo = DOUBLE_DAMAGES_TO.includes(type.name)
      const halfDamageTo = HALF_DAMAGES_TO.includes(type.name)
      const noDamageTo = NO_DAMAGES_TO.includes(type.name)

      let multiplier = 1
      if (noDamageTo) multiplier = 0
      else {
        if (doubleDamageTo) multiplier *= 2
        if (halfDamageTo) multiplier *= 0.5
      }

      return {
        name: type.name,
        multiplier,
      }
    })

  const currentTypes = tab === 'from' ? typesFilteredFrom : typesFilteredTo
  const currentLabel = tab === 'from' ? 'Défensif' : 'Offensif'

  const items = [
    {
      feature: currentLabel,
      types: currentTypes,
    },
  ]

  return (
    <div>
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as 'from' | 'to')}
        className="w-full"
      >
        <TabsList className="mx-auto my-4 flex justify-center">
          <TabsTrigger value="from">Défensif</TabsTrigger>
          <TabsTrigger value="to">Offensif</TabsTrigger>
        </TabsList>
        <TabsContent value="from">
          <DamageTable
            items={items}
            typeName={typeName}
            prefetchTypeData={prefetchTypeData}
            isFrom={true}
          />
        </TabsContent>
        <TabsContent value="to">
          <DamageTable
            items={items}
            typeName={typeName}
            prefetchTypeData={prefetchTypeData}
            isFrom={false}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DamageTable({
  items,
  typeName,
  prefetchTypeData,
}: {
  items: any[]
  typeName: string
  prefetchTypeData: (type: string) => void
  isFrom: boolean
}) {
  return (
    <Table className="w-4/5 mx-auto my-16">
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {items[0].types.map((type: any, index: number) => (
            <TableHead
              key={type.name}
              className="text-foreground h-auto py-3 align-bottom px-0 self-center pr-3"
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 leading-4 whitespace-nowrap [text-orientation:sideways] [writing-mode:vertical-rl]">
                <Link
                  to={`/type/$type`}
                  key={index}
                  params={{ type: type.name }}
                  onMouseEnter={() => prefetchTypeData(type.name)}
                >
                  <Badge
                    variant="secondary"
                    className={`bg-${type.name} text-white dark:bg-${type.name} font-bold text-xs sm:text-sm uppercase px-2 py-1 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow min-h-32 min-w-8 `}
                  >
                    <img
                      src={`/assets/static/pkmnsTypes/${type.name}.svg`}
                      alt={type.name}
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <span>{type.name}</span>
                  </Badge>
                </Link>
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.feature}
            className="*:border-border [&>:not(:last-child)]:border-r"
          >
            <TableHead className="text-foreground font-medium capitalize text-center pt-4">
              <Badge
                variant="secondary"
                className={`bg-${typeName} text-white dark:bg-${typeName} font-bold text-xs sm:text-sm uppercase px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow m-auto`}
              >
                <img
                  src={`/assets/static/pkmnsTypes/${typeName}.svg`}
                  alt={typeName}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
                <span>{typeName}</span>
              </Badge>
            </TableHead>
            {item.types.map((type: any, index: number) => (
              <TableCell
                key={`${type.name}-${index}`}
                className="space-y-1 text-center min-w-[70px]"
              >
                <span
                  className={
                    type.multiplier === 2
                      ? 'text-emerald-600 font-bold'
                      : type.multiplier === 0.5
                        ? 'text-yellow-600 font-bold'
                        : type.multiplier === 0
                          ? 'text-gray-400 font-bold'
                          : ''
                  }
                >
                  {type.multiplier}
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
