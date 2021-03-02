import axios from "axios";

export const SignUp = async (
  Fname,
  Lname,
  btcAddress,
  email,
  referral,
  password
) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, {
    Fname,
    Lname,
    btcAddress,
    email,
    referral,
    password,
  });

export const Login = async (email, password) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, { email, password });
