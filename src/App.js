import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Additions from "./pages/Additions/Additions";
import GlobalStyle from "./assets/styles/globalStyle";
import theme from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/additions">
            <Additions />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
