import react from "react";
import "./Dashboard.css";


import React from 'react'

const Dashboard = () => {
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

        </div>
    )
}

export default Dashboard
