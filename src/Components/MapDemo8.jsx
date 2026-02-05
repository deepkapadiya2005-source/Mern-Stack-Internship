import React from 'react'
import "../assets/Css/MapDemo.css"

export const MapDemo8 = () => {

    var banks = [
        {
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/State_Bank_of_India_logo.svg",
            name: "Amit Patel",
            bankName: "State Bank of India",
            accountType: "Savings",
            balance: 650000
        },
        {
            id: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/HDFC_Bank_Logo.svg",
            name: "Priya Shah",
            bankName: "HDFC Bank",
            accountType: "Current",
            balance: 320000
        },
        {
            id: 3,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/79/ICICI_Bank_Logo.svg",
            name: "Rahul Mehta",
            bankName: "ICICI Bank",
            accountType: "Savings",
            balance: 120000
        },
        {
            id: 4,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Axis_Bank_logo.svg",
            name: "Neha Joshi",
            bankName: "Axis Bank",
            accountType: "Savings",
            balance: 48000
        },
        {
            id: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bank_of_Baroda_logo.svg",
            name: "Vikas Singh",
            bankName: "Bank of Baroda",
            accountType: "Current",
            balance: 210000
        },
        {
            id: 6,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Yes_Bank_logo.svg",
            name: "Anjali Verma",
            bankName: "Yes Bank",
            accountType: "Savings",
            balance: 850000
        }
    ];

    return (
        <div>
            <table className="city-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Bank Logo</th>
                        <th>Customer Name</th>
                        <th>Bank Name</th>
                        <th>Account Type</th>
                        <th>Balance (₹)</th>
                    </tr>
                </thead>

                <tbody>
                    {banks.map((bank) => (
                        <tr
                            key={bank.id}
                            style={{
                                backgroundColor:
                                    bank.balance >= 500000
                                        ? "#4ade80"
                                        : bank.balance >= 200000
                                        ? "#fde047"
                                        : bank.balance >= 50000
                                        ? "#f97316"
                                        : "#b91c1c",
                                color: bank.balance < 50000 ? "white" : "black"
                            }}
                        >
                            <td>{bank.id}</td>
                            <td>
                                <img src={bank.image} alt={bank.bankName} />
                            </td>
                            <td>{bank.name}</td>
                            <td>{bank.bankName}</td>
                            <td>{bank.accountType}</td>
                            <td>₹ {bank.balance.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
