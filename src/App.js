import Navbar from "./Components/Navbar";
import Pokemonlist from "./Components/Pokemonlist";
import SinglePokemon from "./Components/SinglePokemon";
import "./index.css";

function App() {
  return (
    <main className="Main-Container">
      <Navbar></Navbar>
      <div className="lists-Container">
        <Pokemonlist></Pokemonlist>
        <SinglePokemon></SinglePokemon>
      </div>
    </main>
  );
}

export default App;
