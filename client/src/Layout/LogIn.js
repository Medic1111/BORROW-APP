import React from "react";
import { useNavigate } from "react-router-dom"

export default function LogIn({ setIsAuth }){
    // user logs in, recieves a token
    const navigate = useNavigate();
    return(
        <div>
            <h1>Log in page</h1>
            <button onClick={()=>{
                setIsAuth(true)
                navigate("/dashboard")
            }}>Log in</button>
        </div>
    )
};