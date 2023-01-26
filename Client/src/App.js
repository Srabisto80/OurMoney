
// import Login from './Components/login/Login';
// import ForgotPass from './Components/forgotPass/ForgotPass';
// import Register from './Components/register/Register';
// import addIncome from './Components/addIncome';
// import addBill from './Components/addBill';

// function App() {
//   return (
//     <div>
//         <Login />
//         <Register />
//         <ForgotPass />
//         <addBill />
//         <addIncome />


//     </div>
//   );
// }
import React from 'react';
import "./index.css";
// import Layout from './Components/Layout';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import ForgotPass from './Components/forgotpass/ForgotPass';
import Register from './Components/register/Register';
import AddIncome from './Components/addincome/AddIncome';
import AddBill from './Components/addbill/AddBill';
import Dashboard from './Components/dashboard/Dashboard';


function App() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/ForgotPass" element={<ForgotPass />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AddIncome" element={<AddIncome />} />
            <Route path="/AddBill" element={<AddBill />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
