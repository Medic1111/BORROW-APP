
import React, { useState } from "react";
import { logIn } from "../utils/api";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import cancelActive from "../styles/images/X-hover.png";
import cancelInactive from "../styles/images/X-inactive.png";
import submitActive from "../styles/images/submit-hover.png";
import submitInactive from "../styles/images/submit-inactive.png";

export default function LogIn({ setIsAuth, setToken, setUser, setLoans }){
    // user logs in, recieves a token

    const loginData = {
        username: "",
        password: ""
    };
    const [cancelHover, setCancelHover] = useState(false);
    const [submitHover, setSubmitHover] = useState(false);
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
        <div id="Login">
             <img
                src={cancelHover ? cancelActive : cancelInactive}
                onMouseOver={()=>setCancelHover(true)}
                onMouseLeave={()=>setCancelHover(false)}
                id="cancel"/>

            {formErr && <p>{formErr}</p>}
           
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" placeholder="username" onChange={handleInputChange} value={formData.username}/>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="password" onChange={handleInputChange} value={formData.password}/>

                <button type="submit">
                    <img 
                        src={submitHover ? submitActive : submitInactive}
                        onMouseOver={()=>setSubmitHover(true)}
                        onMouseLeave={()=>setSubmitHover(false)}/>
                </button>
            </form>
        </div>
    )
};