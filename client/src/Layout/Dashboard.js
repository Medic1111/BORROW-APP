import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ token, user, loans}){
    const navigate = useNavigate();
    console.log(loans)

    return (
        <div>
            <h1>Hello, {user}!</h1>
            {/* all of the users entries rendered */}
            {/* <h2>Log</h2> */}
            {loans.length && loans.map((loan)=>{
                return (
                    <div>
                        {/* idea 1: as a card  */}
                        {/* <p>lender: {loan.lender === user ? "you" : loan.lender}</p>
                        <p>borrower: {loan.borrower === user ? "you" : loan.borrower}</p>
                        <p>{loan.due_date}</p>
                        <p>{loan.description}</p> */}

                        {/* idea 2: as a sentence  */}
                        <p>{loan.borrower === user ? "you" : loan.borrower} borrowed ${loan.amount} from {loan.lender === user ? "you" : loan.lender} for {loan.description}</p>
                    </div>
                )
            })}

            {/* <button
                onClick={()=>{
                navigate("/create")
                }
                }>New Entry</button> */}

            {/* this button will end up on the user's "Accout" page; an option to log out */}
            {/* <button
                onClick={()=>{
                    localStorage.removeItem("userValidation");
                }}>Log out</button> */}
        </div>
    )
};