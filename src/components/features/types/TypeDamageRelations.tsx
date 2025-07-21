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

import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

import { Badge } from '@/components/ui/badge'

import { CheckIcon, XIcon } from 'lucide-react'

export default function TypeDamageRelations() {
  const [isFrom, setIsFrom] = useState(true)

  const handleOnClick = () => {
    setIsFrom(!isFrom)
  }
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

  const typesFilteredFrom = allTypes.results
    .filter(
      (type: { name: string }) =>
        type.name !== 'unknown' && type.name !== 'stellar',
    )
    .map((type: { name: any }) => {
      const doubleDamageFrom = DOUBLE_DAMAGES_FROM.includes(type.name)
      const halfDamageFrom = HALF_DAMAGES_FROM.includes(type.name)
      const noDamageFrom = NO_DAMAGES_FROM.includes(type.name)
      
      return {
        name: type.name,
        ...(doubleDamageFrom && { doubleDamageFrom }),
        ...(halfDamageFrom && { halfDamageFrom }),
        ...(noDamageFrom && { noDamageFrom }),
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

      return {
        name: type.name,
        ...(doubleDamageTo && { doubleDamageTo }),
        ...(halfDamageTo && { halfDamageTo }),
        ...(noDamageTo && { noDamageTo }),
      }
    })

  const currentTypes = isFrom ? typesFilteredFrom : typesFilteredTo
  const currentLabel = isFrom ? 'Defensive Type' : 'Offensive Type'

  const items = [
    {
      feature: currentLabel,
      types: currentTypes,
    },
  ]

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" onClick={handleOnClick} />
        <Label htmlFor="airplane-mode">{isFrom ? 'From' : 'To'}</Label>
      </div>
      <Table className="w-4/5 mx-auto my-16">
        <TableHeader>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableCell></TableCell>
            {currentTypes.map((type, index) => (
              <TableHead
                key={type.name}
                className="text-foreground h-auto py-3 align-bottom"
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
                      className={`bg-${type.name} text-white dark:bg-${type.name} font-bold text-xs sm:text-sm uppercase px-2 py-1 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <img
                        src={`/assets/static/pkmnsTypes/${type.name}.svg`}
                        alt={type.name}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="hidden sm:inline">{type.name}</span>
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
              <TableHead className="text-foreground font-medium capitalize">
                <Badge
                  variant="secondary"
                  className={`bg-${typeName} text-white dark:bg-${typeName} font-bold text-xs sm:text-sm uppercase px-2 py-1 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <img
                    src={`/assets/static/pkmnsTypes/${typeName}.svg`}
                    alt={typeName}
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                  <span className="hidden sm:inline">{typeName}</span>
                </Badge>
              </TableHead>
              {item.types.map((type, index) => (
                <TableCell
                  key={`${type.name}-${index}`}
                  className="space-y-1 text-center"
                >
                  {isFrom ? (
                    type.doubleDamageFrom ? (
                      <CheckIcon
                        className="inline-flex stroke-emerald-600"
                        size={16}
                        aria-hidden="true"
                      />
                    ) : (
                      <XIcon
                        className="inline-flex stroke-red-600"
                        size={16}
                        aria-hidden="true"
                      />
                    )
                  ) : (
                    type.doubleDamageTo ? (
                      <CheckIcon
                        className="inline-flex stroke-emerald-600"
                        size={16}
                        aria-hidden="true"
                      />
                    ) : (
                      <XIcon
                        className="inline-flex stroke-red-600"
                        size={16}
                        aria-hidden="true"
                      />
                    )
                  )}
                  <span className="sr-only">
                    {isFrom
                      ? (type.doubleDamageFrom ? 'doubleDamageFrom' : 'Not doubleDamageFrom')
                      : (type.doubleDamageTo ? 'doubleDamageTo' : 'Not doubleDamageTo')
                    }
                  </span>
                  <div className="text-muted-foreground text-xs font-medium">
                    {isFrom ? type.halfDamageFrom : type.halfDamageTo}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
