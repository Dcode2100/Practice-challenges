import React, { useEffect, useState } from "react";

// Infinite Scroll component basically we have to track down when we have reached the bottom  of the page we have to fetch the query again and append the results to the bottom
type pokemonType = {
  name: string;
  url: string;
};

export default function InfiniteScroll() {
  const Link = "https://pokeapi.co/api/v2/";
  const [isBottom, SetIsBottom] = useState(false);
  const [data, setData] = useState<pokemonType[] | null>(null);
  const [offset, setOffset] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(
          Link + `pokemon?limit=${limit}&offset=${offset}`
        );
        const pokemonData = await response.json();
        console.log(pokemonData.results);
        const results: pokemonType[] = pokemonData.results;
        setData(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemons();
  }, [offset, limit, isBottom]);

  return (
    <>
      {data?.map((item: any) => (
        <h1 key={item.name}>{item.name}</h1>
      ))}
    </>
  );
}
