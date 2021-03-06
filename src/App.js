import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Additions from "./pages/Additions/Additions";
import Stats from "./pages/Stats/Stats";
import GlobalStyle from "./assets/styles/globalStyle";
import theme from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChartPie,
  faLink,
  faCog,
  faChevronUp,
  faChevronDown,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";

library.add(
  faHome,
  faChartPie,
  faLink,
  faCog,
  faChevronUp,
  faChevronDown,
  faTimes
);

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/stats">
            <Stats />
        </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
        <BottomMenu />
      </Router>
    </ThemeProvider>
  );
}

export default App;
