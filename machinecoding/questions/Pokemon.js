import React, { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(null);

        const listResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        if (!listResponse.ok) throw new Error("Failed to fetch Pokémon list");
        const listData = await listResponse.json();

        // Filter out bulbasaur
        const pokemonUrls = listData.results
          .filter((pokemon) => pokemon.name !== "bulbasaur")
          .map((pokemon) => pokemon.url);

        // Fetch details for each Pokémon
        const pokemonDetails = await Promise.all(
          pokemonUrls.map(async (url) => {
            const data = await fetch(url);
            return data.json();
          })
        );

        const pokemonDetailsSettled = await Promise.allSettled(
          pokemonUrls.map(async (url) => {
            const res = await fetch(url);
            return res.json();
          })
        );

        const sucessResponse = pokemonDetailsSettled
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
        // Format data
        const formattedData = pokemonDetails.map((pokemon) => ({
          name: pokemon.name,
          abilities: pokemon.abilities.map((a) => a.ability.name),
        }));

        setPokemons(formattedData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p className="loading-text">Loading Pokémon...</p>;
  if (error) return <p className="error-text">{error}</p>;

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
          {pokemons.map((pokemon) => (
            <tr key={pokemon.name} className="table-row">
              <td className="capitalize">{pokemon.name}</td>
              <td>{pokemon.abilities.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
