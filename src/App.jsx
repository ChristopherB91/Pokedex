import { useState } from "react";
import axios from 'axios';


export default function App() {
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState();
  const [name, setName] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const searchPokemon = (event) => {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setName("");
  }

    console.log(data)

  return (
    <>
      <button className="darkmode">DarkMode</button>
      <input
        type="text"
        className="searchBar"
        placeholder="Enter a pokemon name"
        onChange={(event) => setName(event.target.value)}
      />
      <button className="search" onClick={searchPokemon}>
        SEARCH
      </button>
      <button className="fav">fav</button>
      <div className="title"><img src="https://fontmeme.com/permalink/221227/848321aef1fd96421ea6edde598ce4ce.png" alt="pokemon-font" border="0" /></div>
      <button className="type1">type1</button>
      <button className="type2">type2</button>
      <div className="moves"></div>
    </>
  );
}