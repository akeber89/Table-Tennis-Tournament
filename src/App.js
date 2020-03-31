import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
//import GameCard from './components/GameCard';
import NameList from './components/List';
import FourOhFour from './components/FourOhFour';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


// import './App.css';


function App() {
  return (

    <Router>
      <>
        <Header /> {/* will always render */}

          <Switch>

            {/* <GameCard /> */}

            <Route exact path = "/">
              <NameList />
            </Route>

            <FourOhFour />
          </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;
