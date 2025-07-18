interface PokemonFormsProps {
  pokemonBaseForm: string
  pokemonNextForms?: string
}
export default function PokemonForms({ pokemonBaseForm, pokemonNextForms }: PokemonFormsProps) {
  return (
    <div className="mb-8 space-y-3">
      <h3 className="text-md font-semibold text-[#1A1A1A] dark:text-gray-300 mb-3">
        Evolution chain and forms
      </h3>
      <p>{pokemonBaseForm}</p>
      <p>{pokemonNextForms}</p>
    </div>
  )
}
