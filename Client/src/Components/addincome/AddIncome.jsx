import React from 'react';
import './AddIncome.css';
import Logo from '../../moneyManLogo1.png';

const addIncome = () => {
  return (
    <div>
      <div className="logo-name">Money Managed</div>
      <div className="img-div">
        <img src={Logo} alt="Money Managed Logo" className="logo" />
      </div>
      <div className="inner-income-div">
        
        <h5>Add Income</h5>
        <input type="text" name="type" placeholder="Income Type" required />
        <br />
        <br />
        <input type="text" name="amount" placeholder="Amount" required />
        <br />
        <br />
        <input type="text" name="iname" placeholder="Name" required />
        <br />
        <br />
        <button type="button" className="button">
          Add Income
        </button>
        <button type="button" className="button">
          Back
        </button>
      </div>
    </div>
  );
};
export default addIncome;
