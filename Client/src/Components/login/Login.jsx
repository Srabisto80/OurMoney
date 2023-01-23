import React from 'react';
import './Login.css';
import Logo from '../../assets/moneyManLogo1.png';

const Login = () => {
  return (
  <div>

      <div className='logo-name'>Money Managed</div>

      <div className='img-div'>

        <img src={Logo} alt="Money Managed Logo" className='logo' />
      </div>

      <div className='inner-login-div'>
        <br />
        <p>Sign In</p>
        <br />
        <input type="text" className='login-username' placeholder='Username'/>
        <h5>Not Registered? <a href='#Register' className='myLink'>Register</a></h5>
        <br />
        <input type="text" className='login-password' placeholder='Password'/>
        <br />
        <br />
        <br />
        <button className='button'>Login</button>
        <h5>Forgot Password? <a href='#ForgotPass' className='myLink'>Recover Password</a></h5>
        <br />

      </div>


    </div>
    )
    }

    export default Login