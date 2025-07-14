import { useHotkeys } from 'react-hotkeys-hook'
import useStore from '@/store/store'

import { Button } from './button'

import { Minus, Plus } from 'lucide-react'

export default function Counter() {
  const { counter, addEntries, removeEntries, resetEntries } = useStore()

  useHotkeys('e', () => addEntries(1))
  useHotkeys('a', () => removeEntries(1))
  useHotkeys('r', resetEntries)

  const maxOdds = 5
  return (
    <aside className="flex flex-col gap-2 w-fit">
      <div className="flex items-center gap-2 m-auto">
        <Minus
          className="w-12 h-12 font-light text-[#1A1A1A] opacity-50 hover:opacity-80 transition-opacity duration-300"
          onClick={() => removeEntries(1)}
        />
        <p className="text-2xl font-bold">{counter}</p>
        <Plus
          className="w-12 h-12 font-light text-[#1A1A1A] opacity-50 hover:opacity-80 transition-opacity duration-300"
          onClick={() => addEntries(1)}
        />
      </div>
      <Button
        variant="default"
        size="sm"
        className="font-bold rounded-full active:scale-[90%] transition-all duration-300"
        onClick={() => resetEntries()}
      >
        RESET COUNTER
      </Button>
    </aside>
  )
}
