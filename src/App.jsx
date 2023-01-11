import { useState } from "react";
import axios from "axios";
import { lightTheme, darkTheme, GlobalStyles } from "./components/DarkMode";
import { ThemeProvider } from "styled-components";
import "./App.css";

export default function App() {
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState([]);
  const [name, setName] = useState();
  const [num, setNum] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  const searchPokemon = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
    if (event.key === "enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
    }
  };
  
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="header">
          <button className="darkmode" onClick={() => themeToggler()}>
            DarkMode
          </button>
          <div className="search">
            <input
              type="text"
              className="searchBar"
              placeholder="Enter a pokemon name"
              onChange={(event) => setName(event.target.value.toLowerCase())}
              onKeyPress={searchPokemon}
            />
            <input
              type="number"
              className="moveNum"
              placeholder="# moves displayed"
              onChange={(event) => setNum(event.target.value)}
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
          {data?.types.map((item, index) => (
            <button className="type1" key={index}>
              {item.type.name}
            </button>
          ))}
        </div>
        <div className="content">
          <div className="imgs">
            <img
              src={data ? data.sprites.front_shiny : null}
              className="picture-shiny"
            />
            <img
              src={data ? data.sprites.front_default : null}
              className="picture"
            />
          </div>
          <div className="moves">
            <ul>
              {data?.moves.slice(0, num).map((item, index) => (
                <li key={index < 5}>| {item.move.name} |</li>
              ))}
            </ul>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
