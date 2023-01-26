import React, { useState } from "react";
import "./Login.css";
import logo from "../../moneyManLogo1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom" //Navigate


const Login = () => {
  localStorage.clear();
  // const [userLogin, setUserLogin] = useState('');
  // const [loginForm, setLoginForm] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("It is working");
    console.log(email, password);

    axios
      .post("http://localhost:3001/api/Login", {
        email: email,
        password: password,
      }, {
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' }
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem( "email", res.data ) ;
        console.log(localStorage)
        navigate("/Dashboard");
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="l-div">
      <div>
        <img className="logo" src={logo} alt="Money Managed Logo" />
      </div>
      <div className="logo-name">Money Managed</div>

      <div className="inner-login-div">
        <br />
        <p>Sign In</p>
        <br />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="login-username"
          placeholder="Username"
        />
        <br />
        <br />
        <Link to="/Register">Not Registered</Link>
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-password"
          placeholder="Password"
        />
        <br />
        <br />
        <br />
        <button
          type="submit"
          className="button"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
        <h5>
          <Link to="/ForgotPass">Forgot Password?</Link>
        </h5>
        <br />
      </div>
    </div>
  );
};

export default Login;
