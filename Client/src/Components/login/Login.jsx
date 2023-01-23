import React, { useState } from 'react';
import './Login.css';
// import logo from '../../moneyManLogo1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // const [userLogin, setUserLogin] = useState('');
  // const [loginForm, setLoginForm] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('It is working');
    console.log(email, password);
   
      axios.get('http://localhost:8080/api/Login', { email: email, password: password })
            .then(res =>console.log(res))
            .catch(err => console.log('err', err))
  };

  return (
    <div className="l-div">
      <div>
        {/* <img className="logo" src={logo} alt="Money Managed Logo" /> */}
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
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          className="login-password"
          placeholder="Password"
        />
        <br />
        <br />
        <br />
        <button type="submit" className="button" onClick={(e) => handleSubmit(e)}>
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