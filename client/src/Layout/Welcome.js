import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to PayBack</h1>
            <button
                onClick={()=>navigate("/login")}>Log In</button>
            <button
                onClick={()=>navigate("/register")}>Register</button>
        </div>
    )
};