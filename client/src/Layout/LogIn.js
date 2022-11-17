import React, { useState } from "react";
import { logIn } from "../utils/api";
import { useNavigate } from "react-router-dom"

export default function LogIn({ setIsAuth }){
    // user logs in, recieves a token
    const loginData = {
        email: "",
        password: ""
    };
    const[ formData,setFormData ] = useState(loginData)
    const navigate = useNavigate();

    const handleInputChange = ({target: {name, value}}) => {
        setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // call api to create entry
        // await createEntry(formData)
        setFormData(loginData);
        navigate("/")
    };

    return(
        <div>
            <h1>Log in page</h1>
            <form   
            onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" onChange={handleInputChange} value={formData.email}/>

            <label htmlFor="password">Password</label>
            <input name="password" type="text" onChange={handleInputChange} value={formData.password}/>


            <button onClick={()=>{
                setIsAuth(true)
                navigate("/dashboard")
            }}>Log in</button>
            </form>
            
        </div>
    )
};