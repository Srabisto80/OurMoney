import React, { useState } from "react";
import "./AddBill.css";
import Logo from "../../moneyManLogo1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBill = () => {

  const [newBill, setnewBill] = useState("");
  const [newBillName, setnewBillName] = useState("")
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    // const addBill = {newBillName: newBill};
    // console.log(addBill);
    axios
    .post("http://localhost:3001/api/addNewBill", { userEmail, bills: {newBillName, newBill}},
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    .then((res) => 
      console.log(res))
      alert("Successfully added Bill!")
      navigate("/Dashboard")
  }


  return (
    <div>
      <div className="logo-name">Money Managed</div>
      <div className="img-div">
        <img src={Logo} alt="Money Managed Logo" className="logo" />
      </div>
      <div className="inner-bill-div">
      <Link to="/Dashboard">BACK</Link>
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
        <br />
        <Link to="/Dashboard" className="button">BACK</Link>
      </div>
    </div>
  );
};
export default AddBill;
