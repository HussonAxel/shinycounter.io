export const PokeballIcon = ({ isCaught = false }: { isCaught?: boolean }) => {
  return (
    <div className="relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-200 ${
          isCaught ? 'text-red-500 drop-shadow-sm' : 'text-gray-400 opacity-60'
        }`}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="2"
          y1="12"
          x2="22"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        {isCaught && (
          <circle
            cx="12"
            cy="12"
            r="1"
            fill="white"
            className="animate-pulse"
          />
        )}
      </svg>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {isCaught ? 'Capturé' : 'Non capturé'}
      </div>
    </div>
  )
}
