import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
//need to set pictures as hover, and import

function Nav() {
    const navigate = useNavigate();

    const [accountHover, setAccountHover] = useState(false);
    const [homeHover, setHomeHover] = useState(false);
    const [searchHover, setSearchHover] = useState(false);

   
    return (

//need to set pictures as hover, and import
<div id="button-container">
    <img 
    src={accountHover ? accountActive : accountInactive} alt="account button" 
    className="btn"
    onClick={()=> navigate("/account/:username")}
    onMouseOver={() => setAccountHover(true)}
    onMouseLeave={() => setAccountHover(false)}
    />
    <img 
    src={homeHover ? homeActive : homeInactive} alt="home button" 
    className="btn"
    onClick={()=> navigate("/dashboard")}
    onMouseOver={() => setHomeHover(true)}
    onMouseLeave={() => setHomeHover(false)}
    />
    <img 
    src={searchHover ? searchActive : searchInactive} alt="search button" 
    className="btn"
    onClick={()=> navigate("/search")}
    onMouseOver={() => setSearchHover(true)}
    onMouseLeave={() => setSearchHover(false)}
    />
</div>

    )
};

export default Nav;