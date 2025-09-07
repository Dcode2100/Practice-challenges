import React, { useEffect, useState } from "react"

type PokemonRow = {
  name: string
  abilities: string[]
}

export default function Pokemon() {
  const [pokemons, setPokemons] = useState<PokemonRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true)
        setError(null)

        const listResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        if (!listResponse.ok) throw new Error("Failed to fetch Pokémon list")
        const listData = await listResponse.json()

        const pokemonUrls: string[] = listData.results
          .filter((pokemon: { name: string }) => pokemon.name !== "bulbasaur")
          .map((pokemon: { url: string }) => pokemon.url)

        const pokemonDetails = await Promise.all(
          pokemonUrls.map(async url => {
            const data = await fetch(url)
            return data.json()
          })
        )

        const formattedData: PokemonRow[] = pokemonDetails.map((pokemon: any) => ({
          name: pokemon.name,
          abilities: pokemon.abilities.map((a: any) => a.ability.name),
        }))

        setPokemons(formattedData)
      } catch (err: any) {
        setError(err?.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [])

  if (loading) return <p className="loading-text">Loading Pokémon...</p>
  if (error) return <p className="error-text">{error}</p>

  return (
    <div className="container">
      <h1>Pokémon Abilities</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map(pokemon => (
            <tr key={pokemon.name} className="table-row">
              <td className="capitalize">{pokemon.name}</td>
              <td>{pokemon.abilities.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


