import {
  BoltIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
  TrashIcon,
  MoreHorizontalIcon,
  EyeIcon,
  PlusIcon,
  StarIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@tanstack/react-router'

export default function Comp369({ pokemonName }: { pokemonName: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontalIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <Link to="/pokemon/$pokemon" params={{ pokemon: pokemonName }}>
            <DropdownMenuItem>
              <EyeIcon size={16} className="opacity-60" aria-hidden="true" />
              View Page
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <PlusIcon size={16} className="opacity-60" aria-hidden="true" />
            Add to Collection
          </DropdownMenuItem>
          <DropdownMenuItem>
            <StarIcon size={16} className="opacity-60" aria-hidden="true" />
            Add to collection (shiny)
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
            Group
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FilesIcon size={16} className="opacity-60" aria-hidden="true" />
            Clone
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <TrashIcon size={16} aria-hidden="true" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
