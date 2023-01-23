import React from 'react';
import "./Register.css";
import Logo from '../../assets/moneyManLogo1.png';

const Register = () => {
  return (
    <div>
     
      <div className='logo-name'>Money Managed</div>
      

<div className='img-div'>

<img src={Logo} alt="Money Managed Logo" className='logo' />
</div>

    <div className='inner-register-div'>
      <h5>Create An Account</h5>
  <input type='text' name='fname' placeholder='First Name'required /><br /><br />
  <input type='text' name='lname' placeholder='Last Name'required /><br /><br />
  <input type="email" id="email" name="email"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder='Email'/><br /><br />
  <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder='Password' required></input><br /><br />
  <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder='Password' required></input><br /><br />
  <button type='button' className='button'>SIGN UP</button>
  <p>Already have an account? <a href='#Register' className='myLink'>Sign in</a></p>
</div>
</div>
  )
}

export default Register