import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/welcome.css"
import loginInactive from "../styles/images/login-inactive.png";
import loginActive from "../styles/images/login-hover.png";
import registerInactive from "../styles/images/register-inactive.png";
import registerActive from "../styles/images/register-hover.png";
import dolladude from "../styles/images/dolladude.png"


export default function Welcome(){
    const navigate = useNavigate();
    const [loginHover, setLoginHover] = useState(false)
    const [registerHover, setRegisterinHover] = useState(false)

    return (
        <div id="Welcome">
            <h2>Welcome to</h2>
            <h1>PayBack</h1>
            <img
                src={dolladude}
                alt="cartoon 'dolla dude' with a bat and shades on"
                id="dolladude"/>
            <div id="button-container">
                <img 
                    src={loginHover ? loginActive : loginInactive} 
                    alt="login button"
                    className="btn"
                    onClick={()=>navigate("/login")}
                    onMouseOver={()=>setLoginHover(true)}
                    onMouseLeave={()=>setLoginHover(false)}
                    />

                <img 
                    src={registerHover ? registerActive : registerInactive} 
                    alt="register button"
                    className="btn"
                    onClick={()=>navigate("/register")}
                    onMouseOver={()=>setRegisterinHover(true)}
                    onMouseLeave={()=>setRegisterinHover(false)}
                    />
            </div>
        </div>
    )
};