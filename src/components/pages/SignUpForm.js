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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Sign Up</label>
        <div>
          <label>First Name</label>
          <input
            type="text"
            autoFocus
            value={Fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            autoFocus
            value={Lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label>BTC Address</label>
          <input
            type="text"
            autoFocus
            value={btcAddress}
            onChange={(e) => {
              setbtcAddress(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
