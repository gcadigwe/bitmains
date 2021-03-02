import React, { useState } from "react";
import * as ROUTES from "../../constants/route";
import {Link} from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handles login form when it's submitted
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <label className="login__label">Login</label>
        <div className="loginsub">
          <label className="loginsub__label">Email</label>
          <input
          className="loginsub__input"
            type="email"
            autoFocus
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="loginsub">
          <label className="loginsub__label">Password</label>
          <input
          className="loginsub__input"
            type="password"
            autoFocus
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
  
        <div className="loginsub__fpward">
            <pre className="loginsub__fpward--style"><Link to={ROUTES.SIGNUP}>Forgot pasword </Link></pre>
        </div>
        <button type="submit" className="login__button--style">LOG IN</button>
        <pre className="login__signup">New Investor? Hurry <Link to={ROUTES.SIGNUP}>SIGN UP </Link>now!</pre>
      </form>
    </div>
  );
};

export default LoginForm;
