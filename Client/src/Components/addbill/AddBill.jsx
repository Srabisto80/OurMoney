import React, { useState } from "react";
import "./AddBill.css";
import Logo from "../../moneyManLogo1.png";
// import { Link } from "react-router-dom";
// import axios from "axios";

const AddBill = () => {

  const [newBill, setnewBill] = useState({});



  return (
    <div>
      <div className="logo-name">Money Managed</div>
      <div className="img-div">
        <img src={Logo} alt="Money Managed Logo" className="logo" />
      </div>
      <div className="inner-bill-div">
        <button type="button" className="bButton">
          BACK
        </button>
        <h5>Add Bill</h5>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <br />
        <input type="text" name="amount" placeholder="Amount" required />
        <br />
        <br />
        <input type="text" name="iname" placeholder="Income" required />
        <br />
        <br />
        <br />
        <br />
        <button type="button" className="button">
          Add Bill
        </button>
      </div>
    </div>
  );
};
export default AddBill;
