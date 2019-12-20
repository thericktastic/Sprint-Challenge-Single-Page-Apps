import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <Router>
      <main>
        <Header />
        <Link to="/">Welcome!</Link>
        <Link to="/characters">Characters</Link>
      <Switch>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
      </main>
    </Router>
  );
}
