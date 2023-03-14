import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  button: 'black',
  buttonColor: 'white',
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  button: '#fff',
  buttonColor: '#000',
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
