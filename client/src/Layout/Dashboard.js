import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const navigate = useNavigate();
    return (
        <div>
            {/* all of the users entries rendered */}
            <button
                onClick={()=>{
                navigate("/create")
                }
                }>New Entry</button>
        </div>
    )
};