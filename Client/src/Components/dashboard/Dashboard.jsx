import React, { useEffect } from "react";
// import React, { useState } from "react";
import "./Dashboard.css";
// import logo from "../../moneyManLogo1.png";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom" 


const Dashboard = (e) => {
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
        <div>
            <h1>Dashboard</h1>
            {/* <p>{userEmail}</p> */}

        </div>
    )
}


export default Dashboard;