import React, { useState } from 'react';
import './AddIncome.css';
import Logo from '../../moneyManLogo1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom" 

const AddIncome = () => {

  const [newIncome, setnewIncome] = useState("");
  const [newPayor, setnewPayor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(newPayor, newIncome)
    axios
      .post("http://localhost:3001/api/AddNewIncome", {income: {newPayor, newIncome}}, {
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' }
      })
      .then((res) => {
        console.log(res)
        navigate("/Dashboard");
      },)
      // catch((err) => console.log("err", err));
  }
  return (
    <div>
      <div className="logo-name">Money Managed</div>
      <div className="img-div">
        <img src={Logo} alt="Money Managed Logo" className="logo" />
      </div>
      <div className="inner-income-div">

        <Link to="/">BACK</Link>

        <h5>Add Income</h5>
        <input type="text" name="Payor" placeholder="Who Paid You?" onChange={(e) => setnewPayor(e.target.value)} required />
        <br />
        <br />
        <br />
        <input type="number" name="amount" placeholder="Payment Amount" onChange={(e) => setnewIncome(e.target.value)} required />
        <br />
        <br />
        <br />
        <button type="button" className="button" onClick={ handleSubmit }>
          Add Income
        </button>
        <button type="button" className="button">
          Back
        </button>
      </div>
    </div>
  )
};

export default AddIncome;
