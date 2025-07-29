import { useId, useMemo, useState } from 'react'
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  type RowData,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  SearchIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetTypeDataByName, useGetPokemonsDataByUrls } from '@/data/pokemons'
import { useParams } from '@tanstack/react-router'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select'
  }
}

type Item = {
  id: string
  Sprite: string
  statut: Array<
    'Informational' | 'Navigational' | 'Commercial' | 'Transactional'
  >
  name: number
  generation: number
  hp: string
}

const columns: ColumnDef<Item>[] = [
  {
    header: 'Sprite',
    accessorKey: 'sprite',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('sprite')}</div>
    ),
  },
  {
    header: 'ID',
    accessorKey: 'id',
    cell: ({ row }) => {
      const id = parseInt(row.getValue('id'))
      return id
    },
    meta: {
      filterVariant: 'range',
    },
  },
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('name')}</div>,
    meta: {
      filterVariant: 'range',
    },
  },
  {
    header: 'Generation',
    accessorKey: 'generation',
    cell: ({ row }) => {
      const generation = <div>{row.getValue('generation')}</div>
      return generation
    },
    meta: {
      filterVariant: 'range',
    },
  },
  {
    header: 'Hp',
    accessorKey: 'hp',
    cell: ({ row }) => (
      <a className="inline-flex items-center gap-1 hover:underline" href="#">
        {row.getValue('hp')} <ExternalLinkIcon size={12} aria-hidden="true" />
      </a>
    ),
    enableSorting: true,
  },
]

const items: Item[] = [
  {
    id: '1',
    Sprite: 'react components',
    statut: ['Informational', 'Navigational'],
    name: 2.5,
    generation: 88,
    hp: 'https://originui.com',
  },
  {
    id: '2',
    Sprite: 'buy react templates',
    statut: ['Commercial', 'Transactional'],
    name: 4.75,
    generation: 65,
    hp: 'https://originui.com/input',
  },
  {
    id: '3',
    Sprite: 'react ui library',
    statut: ['Informational', 'Commercial'],
    name: 3.25,
    generation: 112,
    hp: 'https://originui.com/badge',
  },
  {
    id: '4',
    Sprite: 'tailwind components download',
    statut: ['Transactional'],
    name: 1.95,
    generation: 45,
    hp: 'https://originui.com/alert',
  },
  {
    id: '5',
    Sprite: 'react dashboard template free',
    statut: ['Commercial', 'Transactional'],
    name: 5.5,
    generation: 156,
    hp: 'https://originui.com/tabs',
  },
  {
    id: '6',
    Sprite: 'how to use react components',
    statut: ['Informational'],
    name: 1.25,
    generation: 42,
    hp: 'https://originui.com/table',
  },
  {
    id: '7',
    Sprite: 'react ui kit premium',
    statut: ['Commercial', 'Transactional'],
    name: 6.8,
    generation: 28,
    hp: 'https://originui.com/avatar',
  },
  {
    id: '8',
    Sprite: 'react component documentation',
    statut: ['Informational', 'Navigational'],
    name: 1.8,
    generation: 35,
    hp: 'https://originui.com',
  },
]

export default function Component() {
    const type = useParams({
      from: '/type/$type',
      select: (params) => params.type,
    })

    const { data, isLoading, error } = useGetTypeDataByName(type)

    const pokemonUrls =
      data?.pokemon?.map((pokemon: any) => pokemon.pokemon.url) || []

    const { data: pokemonsData, isLoading: isLoadingPokemons } =
      useGetPokemonsDataByUrls(pokemonUrls)
    
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: 'generation',
      desc: false,
    },
  ])

  const table = useReactTable({
    data: pokemonsData,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client-side filtering
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(), // client-side faceting
    getFacetedUniqueValues: getFacetedUniqueValues(), // generate unique values for select filter/autocomplete
    getFacetedMinMaxValues: getFacetedMinMaxValues(), // generate min/max values for range filter
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    filterFns: undefined
  })

      if (isLoading || isLoadingPokemons)
        return (
          <div className="w-3/4 mx-auto flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600 font-medium">
                Chargement des Pokémon...
              </p>
            </div>
          </div>
        )

      if (error)
        return (
          <div className="w-3/4 mx-auto flex items-center justify-center min-h-[400px]">
            <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-medium">
                Erreur: {error.message}
              </p>
            </div>
          </div>
        )

      if (!data || !pokemonsData)
        return (
          <div className="w-3/4 mx-auto flex items-center justify-center min-h-[400px]">
            <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-600 font-medium">Aucune donnée trouvée</p>
            </div>
          </div>
        )


  console.log(items)
  console.log(pokemonsData)

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Search input */}
        <div className="w-44">
          <Filter column={table.getColumn('sprite')!} />
        </div>
        {/* ID inputs */}
        <div className="w-36">
          <Filter column={table.getColumn('id')!} />
        </div>
        {/* Name inputs */}
        <div className="w-36">
          <Filter column={table.getColumn('name')!} />
        </div>
        {/* Generation inputs */}
        <div className="w-36">
          <Filter column={table.getColumn('generation')!} />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/50">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="relative h-10 border-t select-none"
                    aria-sort={
                      header.column.getIsSorted() === 'asc'
                        ? 'ascending'
                        : header.column.getIsSorted() === 'desc'
                          ? 'descending'
                          : 'none'
                    }
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <div
                        className={cn(
                          header.column.getCanSort() &&
                            'flex h-full cursor-pointer items-center justify-between gap-2 select-none',
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={(e) => {
                          // Enhanced keyboard handling for sorting
                          if (
                            header.column.getCanSort() &&
                            (e.key === 'Enter' || e.key === ' ')
                          ) {
                            e.preventDefault()
                            header.column.getToggleSortingHandler()?.(e)
                          }
                        }}
                        tabIndex={header.column.getCanSort() ? 0 : undefined}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: (
                            <ChevronUpIcon
                              className="shrink-0 opacity-60"
                              size={16}
                              aria-hidden="true"
                            />
                          ),
                          desc: (
                            <ChevronDownIcon
                              className="shrink-0 opacity-60"
                              size={16}
                              aria-hidden="true"
                            />
                          ),
                        }[header.column.getIsSorted() as string] ?? (
                          <span className="size-4" aria-hidden="true" />
                        )}
                      </div>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Data table with filters made with{' '}
        <a
          className="hover:text-foreground underline"
          href="https://tanstack.com/table"
          target="_blank"
          rel="noopener noreferrer"
        >
          TanStack Table
        </a>
      </p>
    </div>
  )
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const id = useId()
  const columnFilterValue = column.getFilterValue()
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnHeader =
    typeof column.columnDef.header === 'string' ? column.columnDef.header : ''
  const sortedUniqueValues = useMemo(() => {
    if (filterVariant === 'range') return []

    // Get all unique values from the column
    const values = Array.from(column.getFacetedUniqueValues().keys())

    // If the values are arrays, flatten them and get unique items
    const flattenedValues = values.reduce((acc: string[], curr) => {
      if (Array.isArray(curr)) {
        return [...acc, ...curr]
      }
      return [...acc, curr]
    }, [])

    // Get unique values and sort them
    return Array.from(new Set(flattenedValues)).sort()
  }, [column.getFacetedUniqueValues(), filterVariant])

  if (filterVariant === 'range') {
    return (
      <div className="*:not-first:mt-2">
        <Label>{columnHeader}</Label>
        <div className="flex">
          <Input
            id={`${id}-range-1`}
            className="flex-1 rounded-e-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={(e) =>
              column.setFilterValue((old: [number, number]) => [
                e.target.value ? Number(e.target.value) : undefined,
                old?.[1],
              ])
            }
            placeholder="Min"
            type="number"
            aria-label={`${columnHeader} min`}
          />
          <Input
            id={`${id}-range-2`}
            className="-ms-px flex-1 rounded-s-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={(e) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                e.target.value ? Number(e.target.value) : undefined,
              ])
            }
            placeholder="Max"
            type="number"
            aria-label={`${columnHeader} max`}
          />
        </div>
      </div>
    )
  }

  if (filterVariant === 'select') {
    return (
      <div className="*:not-first:mt-2">
        <Label htmlFor={`${id}-select`}>{columnHeader}</Label>
        <Select
          value={columnFilterValue?.toString() ?? 'all'}
          onValueChange={(value) => {
            column.setFilterValue(value === 'all' ? undefined : value)
          }}
        >
          <SelectTrigger id={`${id}-select`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {sortedUniqueValues.map((value) => (
              <SelectItem key={String(value)} value={String(value)}>
                {String(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={`${id}-input`}>{columnHeader}</Label>
      <div className="relative">
        <Input
          id={`${id}-input`}
          className="peer ps-9"
          value={(columnFilterValue ?? '') as string}
          onChange={(e) => column.setFilterValue(e.target.value)}
          placeholder={`Search ${columnHeader.toLowerCase()}`}
          type="text"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  )
}
