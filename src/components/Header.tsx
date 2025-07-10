import { Link } from '@tanstack/react-router'
import { Button } from './ui/button.tsx'
import { Plus } from 'lucide-react'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row justify-between w-full">
        <div>
          <h2 className="font-bold text-2xl">ShinyHunter.io</h2>
        </div>
          <div className="flex items-center gap-2">
            <Button className='rounded-md'>
              <Plus className="mr-2 h-4 w-4" />
              <Link to="/newHunt">New Hunt</Link>
            </Button>
          </div>
      </nav>
    </header>
  )
}
