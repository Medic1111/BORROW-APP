import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../styles/dashboard.css"

export default function Dashboard({ token, user, loans}){
    const navigate = useNavigate();

    return (
        <div id="Dashboard">
            <h1>Hello, {user}!</h1>
            <h2>Money Moves</h2>
            {loans.length && loans.map((loan)=>{
                return (
                    <div key={loan.id} className="loan">
                    {/* idea 1: as a card  */}
                        <p>lender: {loan.lender === user ? "you" : loan.lender}</p>
                        <p>borrower: {loan.borrower === user ? "you" : loan.borrower}</p>
                        <p>{loan.due_date}</p>
                        <p>{loan.description}</p>

                    {/* idea 2: as a sentence  */}
                        {/* <p>{loan.borrower === user ? "you" : loan.borrower} borrowed ${loan.amount} from {loan.lender === user ? "you" : loan.lender} for {loan.description}</p> */}
                    </div>
                )
            })}

        {/* this button will be rendered once another user is searched for
             <button
                onClick={()=>{
                navigate("/create")
                }
                }>New Entry</button> */}
        {/* this button will be rendered on the user's account page
            <button
                onClick={()=>navigate(`/account/${user.username}`)}>view account</button> */}
                <Nav/>
        </div>
    )
};