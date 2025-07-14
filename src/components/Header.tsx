import { Link } from '@tanstack/react-router'
import { Button } from './ui/button.tsx'
import { Plus } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex bg-white text-black justify-between">
      <nav className="flex flex-row justify-between w-full">
        <div className="p-4 w-1/4 bg-gray-100">
          <h2 className="font-bold text-2xl">ShinyHunter.io</h2>
        </div>
        <div className="w-3/4 flex justify-end items-center p-4">
          <Button className="rounded-md">
            <Plus className="mr-2 h-4 w-4" />
            <Link to="/newHunt">New Hunt</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
