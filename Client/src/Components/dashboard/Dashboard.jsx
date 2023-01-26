
import React, { useEffect } from "react";
// import React, { useState } from "react";
import "./Dashboard.css";
// import logo from "../../moneyManLogo1.png";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom" 

const Dashboard = () => {
    // e.preventDefault();
    console.log(localStorage.getItem('email'))
   const userEmail = localStorage.getItem('email')
    console.log(userEmail);

   useEffect(() => {
    console.log("use effect")
    axios
        .post("http://localhost:3001/api/Dash", { userEmail })
        .then((res) => {
            console.log(res)
            
        })
    }, [])


    return (
        <div className="page-div">
            <div className="user-name">Korra Teasley</div>



            <div className="balance-div">
                <br />
                <div className="job-name">BANYAN LABS</div>
                <div className="paystub-amount">$1,120.45</div>
                <div className="pay-frequency">BIWEEKLY</div>
                <div className="remaning-balance">
                    $34.20
                </div>
                <p className="remaining-p">REMAINING</p>
            </div>
            <br />
            <button className="balance-edit-btn edit-btn button">Add Income</button>
            <br />
            <br />


            <div className="bills-div">
                <p className="bills-p">BILLS</p>

                <div className="bill">
                    <div className="bill-name">Rent</div>
                    <div className="bill-total">$925.50</div>
                </div>

                <div className="bill">
                    <div className="bill-name">Phone</div>
                    <div className="bill-total">$55.75</div>
                </div>

                <div className="bill">
                    <div className="bill-name">Cable</div>
                    <div className="bill-total">$105.00</div>
                </div>
            </div>
            <br />
            <button className="edit-bills edit-btn button">Add Bill</button>
            <br />
            <br />
            <button className="back">Back</button>





export default Dashboard

