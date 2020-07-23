import React from "react";
import "./App.css";
import Login from './Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">

          <Header />

            <Checkout />

          </Route>
            <Router path="/login">

              <Login />

            </Router>
              <Route path="/">

              <Header />
                <Home />

              </Route>
          </Switch>
        </div>
    </Router>
    );
  }













export default App;
