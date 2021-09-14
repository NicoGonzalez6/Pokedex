import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Components/reducer";
import {
  SET_LOADING,
  SET_POKEMONS,
  SET_POKEMON,
  HANDLE_PAGE,
} from "./Components/Actions";

const AppContext = React.createContext();

const url = "https://pokeapi.co/api/v2/pokemon/";

const initialState = {
  isLoading: false,
  nbPage: 0,
  singlePokemon: undefined,
  pokemons: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: SET_POKEMONS, payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const infoHandler = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    dispatch({ type: SET_POKEMON, payload: data });
  };

  const pageHandler = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    getData(`${url}?offset=${state.nbPage}&limit=10`);
  }, [state.nbPage]);

  return (
    <AppContext.Provider value={{ ...state, pageHandler, infoHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
