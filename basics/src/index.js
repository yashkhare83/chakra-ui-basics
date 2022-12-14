import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,extendTheme,Heading,button,ButtonGroup, defineStyle, defineStyleConfig  } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  heading:{
  
  },
  colors: {
    primary: {
      100: "#372045",
      200:'#4b2b5d',
      900: "#1a202c",
    },
    secondary:{
      100: "#ae92ef",
      200: "#c9ac56",
    },


  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Inter, serif",
    mono: "Menlo, monospace",
    button:"Inter, serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  size:{
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
})

// add custom button styles
const buttonPrimary = defineStyle({
  background: 'primary.100',
  colorScheme: 'white',
  fontFamily: 'Inter,sarif',
  fontWeight: 'bold',

  // let's also provide dark mode alternatives
  _hover: {
    background: 'white',
    colorScheme: 'primary.100',
  }
})

const buttonSecondary = defineStyle({
  background: 'secondary.100',
  colorScheme: 'white',
  fontFamily: 'Inter,sarif',
  fontWeight: 'bold',

  // let's also provide dark mode alternatives
  _hover: {
    background: 'white',
    color: 'secondary.100',
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { buttonPrimary,buttonSecondary },
})

root.render(
  
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
