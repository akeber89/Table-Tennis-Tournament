import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import AddPlayers from "./components/AddPlayers";
import FourOhFour from "./components/FourOhFour";
import Figure from "./components/Figure";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Header /> {/* will always render */}
        <Switch>
          <Route exact path="/">
            <Figure />
            <AddPlayers />
            <Counter />
            <hr />
            <Counter />
          </Route>

          <FourOhFour />
        </Switch>
        <Footer /> {/* will always render */}
      </>
    </Router>
  );
}

export default App;
