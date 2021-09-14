import React from "react";
import { SET_LOADING, SET_POKEMONS, SET_POKEMON, HANDLE_PAGE } from "./Actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload, isLoading: false };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        return { ...state, nbPage: state.nbPage + 20 };
      }
      if (action.payload === "prev") {
        return { ...state, nbPage: state.nbPage - 20 };
      }
    case SET_POKEMON:
      return { ...state, singlePokemon: action.payload };
  }
};

export default reducer;
