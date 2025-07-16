interface CurrentPokemonRightProps {
  pokemonID: number;
  pokemonDefaultName: string;
}

export default function CurrentPokemonRight({ pokemonID, pokemonDefaultName }: CurrentPokemonRightProps) {
  return (
    <div className="h-full bg-gray-200 w-3/5">{pokemonDefaultName} - #{pokemonID}</div>
  )
}
