import { useState, createContext, useReducer, useContext } from "react";
import axios from "axios";
import { lightTheme, darkTheme, GlobalStyles } from "./components/DarkMode";
import { ThemeProvider } from "styled-components";
import MoveUpdate from "./components/MoveUpd";
import "./App.css";

export const RatingContext = createContext();

const initialstate = {
  num: 10,
};

const reducer = (state, action) => {
  switch (action) {
    case "increment1":
      return state + 1;
    case "increment10":
      return state + 10;
    case "decrement1":
      return state - 1;
    case "decrement10":
      return state - 10;
    default:
      return state;
  }
};

export default function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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

  const [numCount, dispatch] = useReducer(reducer, initialstate.num);

  return (
    <>
      <RatingContext.Provider
        value={{ state: numCount, dispatchEvent: dispatch }}
      >
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
                onKeyDown={searchPokemon}
              />
              <button className="search" onClick={searchPokemon}>
                SEARCH
              </button>
            </div>
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
            <div className="moveI-D">
              <MoveUpdate />
            </div>
            <div className="moves">
              <ul>
                {data?.moves.slice(0, numCount).map((item, index) => (
                  <li key={index}>| {item.move.name} |</li>
                ))}
              </ul>
            </div>
          </div>
        </ThemeProvider>
      </RatingContext.Provider>
    </>
  );
}
