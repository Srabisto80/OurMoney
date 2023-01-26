import {useEffect} from "react";
// import react, {useEffect} from "react";

import "./Dashboard.css";
// import logo from "../../moneyManLogo1.png";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom" 

const Dashboard = () => {
    // e.preventDefault();
    // console.log(localStorage.getItem('email'))
   const userEmail = localStorage.getItem('email')
    // console.log(userEmail);
    // const navigate = useNavigate();

   useEffect(() => {
    console.log("use effect")
    axios
        .post("http://localhost:3001/api/Dash", { userEmail })
        .then((res) => { 
            // console.log(res)
            localStorage.setItem("name", res.data.firstName + " " + res.data.lastName)
            // localStorage.setItem("bills", res.data.bills)
            // localStorage.setItem("income", res.data.income)
            // localStorage.setItem("total", res.data.total)
            const incomeArray = res.data.income
            console.log(incomeArray);
            const billArray = res.data.bills
            console.log(billArray)
            console.log(localStorage)
        })
    }, [])


    // const incomeList = () =>{
    //     incomeArray.map(each) => {

    //     }
    // }

    return (
        <div className="page-div">
            <div className="user-name">{localStorage.getItem("name")}</div>



            <div className="balance-div">
                <br /> 
                <div  className="job-name">
                {/* {incomeArray.map((item) => (
                    <li>{item.newBillName}</li>
                    <li>{item.newBill}</li>
                ))} */}
                        <div className="paystub-amount">
                          Fry's {/* {item.newBillName}  */}
                        </div>
                        <div className="paystub-amount">
                           $300.45{/* {item.newBill}  */}
                        </div>
                    </div>
                <div className="pay-frequency">BIWEEKLY</div>
                <div className="remaning-balance">
                    $34.20
                </div>
                <p className="remaining-p">REMAINING</p>
            </div>
            <br />
            <Link to="/AddIncome" className="balance-edit-btn edit-btn button">Add Income</Link>
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
            <Link to="/AddBill" className="edit-bills edit-btn button">Add Bill</Link>
            <br />
            <br />
            <Link to="/" className="back">Back</Link>

        </div>
    )
};

export default Dashboard;
