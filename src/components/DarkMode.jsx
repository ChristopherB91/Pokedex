import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#87CEEB",
  button: '#fff',
  buttonColor: '#448EE4',
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body}; 
        color: ${(props) => props.theme.buttonColor}; 
    }

    button{
        background-color: ${(props) => props.theme.button};  
        color: ${(props) => props.theme.buttonColor};
    }`;