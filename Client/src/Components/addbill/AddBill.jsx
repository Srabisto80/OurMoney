import React, { useState } from "react";
import "./AddBill.css";
import Logo from "../../moneyManLogo1.png";
import { Link } from "react-router-dom";
import axios from "axios";

const AddBill = () => {

  const [newBill, setnewBill] = useState("");
  const [newBillName, setnewBillName] = useState("")

  const handleSubmit = () => {
    const addBill = {newBillName: newBill};
    console.log(addBill);
    axios
    .post("http://localhost:3001/api/addNewBill", addBill)
    .then((res) => 
      console.log(res))
  }


  return (
    <div>
      <div className="logo-name">Money Managed</div>
      <div className="img-div">
        <img src={Logo} alt="Money Managed Logo" className="logo" />
      </div>
      <div className="inner-bill-div">
        <Link to="/">BACK</Link>
        <h5>Add Bill</h5>
        <input type="text" name="name" onChange={(e) => setnewBillName(e.target.value)} placeholder="Who do you Owe?" required />
        <br />
        <br />
        <br />
        <br />
        <input type="number" name="amount" onChange={(e) => setnewBill(e.target.value)} placeholder="Owed Amount" required />
        <br />
        <br />
        <br />
        <br />
        <button type="button" className="button" onClick={handleSubmit}>
          Add Bill
        </button>
      </div>
    </div>
  );
};
export default AddBill;
