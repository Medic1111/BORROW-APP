
import React, { useState } from "react";
import { logIn } from "../utils/api";

import { useNavigate } from "react-router-dom"

export default function LogIn({ setIsAuth, setToken, setUser, setLoans }){
    // user logs in, recieves a token

    const loginData = {
        username: "",
        password: ""
    };
    const[ formData,setFormData ] = useState(loginData);
    const [formErr, setFormErr] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = ({target: {name, value}}) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await logIn(formData)
            .then(({ user, token, loans }) => {
                setIsAuth(true);
                setToken(token);
                setUser(user);
                setLoans(loans);
                
            // store token in local storage with expiration date 
                const myExp = new Date(new Date().getTime() + 161 * 60 * 60);
                    localStorage.setItem(
                        "userValidation",
                        JSON.stringify({
                        username: user,
                        token: token,
                        expiration: myExp.toISOString(),
                        })
                    );
                setFormData(loginData);
                navigate("/dashboard");
            })
            .catch((err) => setFormErr(err.message))
    };

    return(
        <div>
            <h1>Log in page</h1>
            {formErr && <p>{formErr}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" onChange={handleInputChange} value={formData.username}/>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" onChange={handleInputChange} value={formData.password}/>

                <button type="submit">Log in</button>
            </form>
        </div>
    )
};