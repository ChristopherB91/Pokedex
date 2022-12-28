import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState();
  const [name, setName] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const searchPokemon = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <>
      <div className="header">
        <button className="darkmode">DarkMode</button>
        <div className="search">
          <input
            type="text"
            className="searchBar"
            placeholder="Enter a pokemon name"
            onChange={(event) => setName(event.target.value.toLowerCase())}
            onKeyPress = {searchPokemon}
          />
          <button className="search" onClick={searchPokemon}>
            SEARCH
          </button>
        </div>
        <button className="fav">Favorite</button>
      </div>
      <div className="title">
        <img
          src="https://fontmeme.com/permalink/221227/848321aef1fd96421ea6edde598ce4ce.png"
          alt="pokemon-font"
          border="0"
          className="titlePic"
        />
      </div>
      <div className="types">
        <button className="type1">Fire</button>
        <button className="type2">Flying</button>
      </div>
      <div className="content">
        <div className="imgs">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
            alt="pokemon shiny img"
            className="picture-shiny"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            alt="pokemon normal img"
            className="picture"
          />
        </div>
        <div className="moves">
          <ul>
            <li>| mega-punch |</li>
            <li>| fire-punch |</li>
            <li>| thunder-punch |</li>
            <li>| scratch |</li>
            <li>| swords-dance |</li>
            <li>| cut |</li>
            <li>| wing-attack |</li>
          </ul>
        </div>
      </div>
    </>
  );
}
