 interface CurrentPokemonLeftProps {
  pokemonJapaneseName: string;
}
export default function CurrentPokemonLeft({ pokemonJapaneseName }: CurrentPokemonLeftProps) {

  return (
        <div className="h-full bg-gray-100 w-2/5">
          <div>
            <h2>{pokemonJapaneseName}</h2>
          </div>
        </div>
  )
}
