import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
      //login and redirect


      })
    .catch((e) => alert(e.message));

  };

  const register = event => {
    event.preventDefault();

    auth.CreateUserWithEmailAndPassword(email,password)
    .then((auth) => {
      //created a user

      })
    .catch((e) => alert(e.message));

  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/b92deec8-b2fa-4a92-a576-72e9dc8b3a3c"
          alt=""
          />
      </Link>

      <div className="login__container">
        <h1> Sign in</h1>
        <form>
          <h5>Email</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        <p><small>
         The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price.</small>
      </p>
      <button onClick={register} className="login__registerInButton">Create an Amazon account</button>
        </form>
      </div>


    </div>

    );
}

export default Login;