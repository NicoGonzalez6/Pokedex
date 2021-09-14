import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";

const Pokemonlist = () => {
  const { isLoading, pokemons, pageHandler, nbPage, infoHandler } =
    useGlobalContext();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <article className="pokemonList">
      <div className="title">
        <h1>List of Pokemons</h1>
      </div>
      {pokemons.map((pokemon, index) => {
        return (
          <ul key={index} className="pokemon-info">
            <li className="name-info">{pokemon.name}</li>
            <button
              className="btn-info"
              onClick={() => {
                infoHandler(pokemon.name);
              }}
            >
              info
            </button>
          </ul>
        );
      })}
      <div className="page-btn">
        {nbPage > 10 && (
          <button
            disabled={isLoading}
            className="prev-btn btn"
            value="prev"
            onClick={(evt) => {
              pageHandler(evt.target.value);
            }}
          >
            previous
          </button>
        )}
        <button
          disabled={isLoading}
          className="next-btn btn"
          value="inc"
          onClick={(evt) => {
            pageHandler(evt.target.value);
          }}
        >
          Next Page
        </button>
      </div>
    </article>
  );
};

export default Pokemonlist;
