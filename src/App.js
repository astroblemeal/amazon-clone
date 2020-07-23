import React, { useEffect } from "react";
import "./App.css";
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ basket, dispatch }] = useStateValue();
    //code which runs based on a condition



    useEffect(() => {

      auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {

        dispatch({
          type: "SET_USER",
          user: null
        })
        }
      })
    }, []);


// routes
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
