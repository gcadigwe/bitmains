import React, { useState } from "react";

const SignUpForm = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [btcAddress, setbtcAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign">
      <form onSubmit={handleSubmit} className="sign__form">
        <label className="sign__label__title">Sign Up</label>
        <div className="signsub">
          <label className="signsub__label">First Name</label>
          <input
            className="signsub__input"
            type="text"
            autoFocus
            value={Fname}
            onChange={(e) => {
              setFname(e.target.value);
              
            }}
          />
        </div>

        <div className="signsub">
          <label className="signsub__label">Last Name</label>
          <input
            className="signsub__input"
            type="text"
            autoFocus
            value={Lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>

        <div className="signsub">
          <label className="signsub__label">Email</label>
          <input
           className="signsub__input"
            type="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="signsub">
          <label className="signsub__label">BTC Address</label>
          <input
           className="signsub__input"
            type="text"
            autoFocus
            value={btcAddress}
            onChange={(e) => {
              setbtcAddress(e.target.value);
            }}
          />
        </div>

        <div className="signsub">
          <label className="signsub__label">Referral</label>
          <input
           className="signsub__input"
            type="text"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="signsub">
          <label className="signsub__label">Password</label>
          <input
           className="signsub__input"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="signsub-check">
         
          <input
           className="signsub__input--check"
            type="checkbox"
          />
           <label className="signsub__label--check">I agree to terms and conditions</label>
        </div>

        <button type="submit" className="sign__button--style">SIGN UP</button>
        
      </form>
    </div>
  );
};

export default SignUpForm;
