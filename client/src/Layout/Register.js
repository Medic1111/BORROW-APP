
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { register } from "../utils/api";


export default function Register(setIsAuth){
    const registerData = {
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    };

    const [formData, setFormData] = useState(registerData);
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
        setFormData(registerData);
        navigate("/dashboard")
    };
    return(
        <div>
            <h1>Register here!</h1>
            <form
             onSubmit={handleSubmit}>
             <label htmlFor="email">Email</label>
             <input name="email" type="text" onChange={handleInputChange} value={formData.email}/>
 
             <label htmlFor="userName">User Name</label>
            <input name="userName" type="text" onChange={handleInputChange} value={formData.userName}/>

            <label htmlFor="password">Password</label>
            <input name="password" type="text" onChange={handleInputChange} value={formData.password}/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input name="confirmPassword" type="text" onChange={handleInputChange} value={formData.confirmPassword}/>


            <button onClick={()=>{
                setIsAuth(true)
                navigate("/dashboard")
            }}>Register</button>


            </form>

        </div>
    )
};