import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./components/GlobalStyle";

const theme = {
  primaryColor: "#22223b",
  lightPrimaryColor: "#4a4e69",
  secondaryColor: "#f2e9e4",
  borderRadius: "10px",
  transition: "0.3s ease-in-out",
};

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://user-management-server.herokuapp.com/"
      : process.env.NODE_ENV === "development" && "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
