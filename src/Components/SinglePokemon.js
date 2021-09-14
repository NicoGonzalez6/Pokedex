import React from "react";
import { useGlobalContext } from "../Context";

const SinglePokemon = () => {
  const { singlePokemon } = useGlobalContext();

  if (singlePokemon) {
    const {
      name,
      sprites: { front_default },
    } = singlePokemon;
    return (
      <article className="singlePokemon-Container">
        <div className="single-Title">
          <h1>Pokemon Details</h1>
        </div>
        <section className="single-Card">
          <div className="divider"></div>
          <img src={front_default}></img>
          <h1>{name}</h1>
          <div className="type">
            {singlePokemon.types.map((e) => {
              return <p>{e.type.name}</p>;
            })}
          </div>
        </section>
      </article>
    );
  }

  return (
    <article className="singlePokemon-Container">
      <div className="single-Title">
        <h1>Pokemon Details</h1>
      </div>
      <section className="single-Card">
        <div className="divider"></div>
      </section>
    </article>
  );
};

export default SinglePokemon;
