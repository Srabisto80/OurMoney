import React from 'react';
import './ForgotPass.css';
import Logo from '../../moneyManLogo1.png';
import { Link } from 'react-router-dom';

const ForgotPass = () => {

    
  return (
    <div>
      <div className="logo-name">Money Managed</div>
      <div className="img-div">
        <img src={Logo} alt="Money Managed Logo" className="logo" />
      </div>
      <div className="inner-forgotpass-div">
        <button type="button" className="bButton">
          <Link to="/">BACK</Link>
        </button>
        <h5>Recover Password</h5>
        <input
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="Email"
        />
        <br />
        <br />
        <button type="button" className="button">
          RECOVER
        </button>
        <p>
          Don't have an account?
          <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;
