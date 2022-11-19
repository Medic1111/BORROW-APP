import React, { useState } from "react";
import Nav from "./Nav";
import accountPic from "../styles/images/account-hover.png";
import settingsActive from "../styles/images/settings-hover.png";
import settingsInactive from "../styles/images/settings-inactive.png";
import "../styles/user.css";


export default function UserAccount({ user }){
    const [settingsHover, setSettingsHover] = useState(false);

    return (
        <div id="User">
            <img
                src={settingsHover ? settingsActive : settingsInactive}
                id="settings"
                onMouseOver={()=>setSettingsHover(true)}
                onMouseLeave={()=>setSettingsHover(false)}/>
            <img
                src={accountPic}
                id="account-pic"/>

            <div className="info"><h5>ID</h5><p>{user.username}</p></div>

            {/* log out button 
                <button
                onClick={()=>{
                    localStorage.removeItem("userValidation");
                }}>Log out</button> */}
                <Nav/>
        </div>
    )
};