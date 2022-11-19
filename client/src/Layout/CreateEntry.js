import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEntry } from "../utils/api";

export default function CreateEntry() {
    const { tradee } = useParams();

    const INIT_FORM_DATA = {
        borrower: "",
        amount: 0,
        due_date: "",
        time: "",
        phone: "",
    };

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
        console.log(tradee)
        // call api to create entry
        // await createEntry(formData)
        // setFormData(INIT_FORM_DATA);
        // navigate("/")
    };

    return (
        <form
            onSubmit={handleSubmit}>
            <label htmlFor="borrower">Borrower</label>
            <input name="borrower" type="text" onChange={handleInputChange} value={formData.borrower}/>

            <label htmlFor="amount">Amount</label>
            <input name="amount" type="number" onChange={handleInputChange} value={formData.amount}/>

            <label htmlFor="due_date">Due Date</label>
            <input name="due_date" type="date" onChange={handleInputChange} value={formData.due_date}/>

            <label htmlFor="time">PayBack Time</label>
            <input name="time" type="time" onChange={handleInputChange} value={formData.time}/>

            <label htmlFor="phone">Borrower's Phone</label>
            <input
                name="phone"
                type="tel"
                pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                placeholder="xxx-xxx-xxxx"
                onChange={handleInputChange}
                value={formData.phone}
            />
            <button type="submit">Submit</button>
            <button>Cancel</button>
        </form>
    );
}
