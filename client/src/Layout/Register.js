
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { register } from "../utils/api";


export default function Register({ setIsAuth, setToken, setUser }){
    const registerData = {
        email: "",
        username: "",
        password: "",
    };

    const [formData, setFormData] = useState(registerData);
    const [formErr, setFormErr] = useState(null);
    const navigate = useNavigate();

// --- handlers ---
    const handleInputChange = ({target: {name, value}}) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        setFormErr(null)
        // if the value in confirm password isn't the same as in password, set an error and don't send the request
        const password = event.target[2].value
        const confirm = event.target[3].value
        event.preventDefault();
        if (password !== confirm){
            setFormErr("passwords to not match")
        }else{
            await register(formData)
                .then(({ user, token, expiration }) =>{
                    // use state or context to set the user and the token
                    setIsAuth(true);
                    setToken(token);
                    setUser(user);
                    const myExp = new Date(new Date().getTime() + 161 * 60 * 60);
                    localStorage.setItem(
                        "userValidation",
                        JSON.stringify({
                        username: user,
                        token: token,
                        expiration: myExp.toISOString(),
                        })
                    );
                    setFormData(registerData);
                    navigate("/dashboard");
                })
                .catch((err) => setFormErr(err.message))
        }
    };

// --- return ---
    return(
        <div>
            <h1>Register here!</h1>
            {formErr && <p>{formErr}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" onChange={handleInputChange} value={formData.email}/>
    
                <label htmlFor="username">User Name</label>
                <input name="username" type="text" onChange={handleInputChange} value={formData.username}/>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" onChange={handleInputChange} value={formData.password}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input name="confirmPassword" type="password"/>

                <button type="submit" >Register</button>
            </form>
        </div>
    )
};