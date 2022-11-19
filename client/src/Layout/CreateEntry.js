import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEntry } from "../utils/api";
import submitActive from "../styles/images/submit-hover.png";
import submitInactive from "../styles/images/submit-inactive.png";
import cancelActive from "../styles/images/X-hover.png";
import cancelInactive from "../styles/images/X-inactive.png";
import "../styles/create.css"

export default function CreateEntry({ user, setLoans }) {
    const currentDate = new Date().toISOString().slice(0, 10)
    const currentTime = new Date().toISOString().slice(11, 19)
    const { tradee } = useParams();

    const INIT_FORM_DATA = {
        lender: user.isBorrower ? tradee : user.username,
        borrower: user.isBorrower ? user.username : tradee,
        status: "pending",
        creation_date: currentDate,
        due_date: "",
        amount: 0,
        description: "",
        payment_date: currentDate,
        transaction_rating: null,
    };

    const [submitHover, setSubmitHover] = useState(false);
    const [cancelHover, setCancelHover] = useState(false);
    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const navigate = useNavigate();

    const handleInputChange = ({target: {name, value}}) => {
        setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({...INIT_FORM_DATA, ...formData})
        // console.log(user)
        
        // call api to create entry
        await createEntry({...INIT_FORM_DATA, ...formData})
            .then((serverRes)=>{
                setLoans((prevState)=> ([...prevState, serverRes]))
                setFormData(INIT_FORM_DATA);
                navigate("/dashboard");
            })
            .catch(err=>console.log(err))
    };

    return (
        <div id="Create">
            <img
                src={cancelHover ? cancelActive : cancelInactive}
                onMouseOver={()=>setCancelHover(true)}
                onMouseLeave={()=>setCancelHover(false)}
                id="cancel-create"
                onClick={()=>navigate("/")}/>
            <form
                onSubmit={handleSubmit}
                id="Create">
                <label htmlFor="borrower">Borrower</label>
                <input name="borrower" type="text" value={formData.borrower}/>

                <label htmlFor="amount">Amount</label>
                <input name="amount" type="number" onChange={handleInputChange} value={formData.amount}/>

                <label htmlFor="due_date">Due Date</label>
                <input name="due_date" type="date" onChange={handleInputChange} value={formData.due_date}/>

                {/* <label htmlFor="time">PayBack Time</label>
                <input name="time" type="time" onChange={handleInputChange} value={formData.time}/> */}

                <label htmlFor="description">Description</label>
                <input name="description" type="text" onChange={handleInputChange} value={formData.description}/>

                <button type="submit">
                    <img
                        src={submitHover ? submitActive : submitInactive}
                        onMouseOver={()=>setSubmitHover(true)}
                        onMouseLeave={()=>setSubmitHover(false)}
                        id="submit-create"/>
                </button>
            </form>
        </div>
    );
}
