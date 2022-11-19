import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import accountActive from "../styles/images/account-hover.png";
import accountInactive from "../styles/images/account-inactive.png";
import trackActive from "../styles/images/track-hover.png";
import trackInactive from "../styles/images/track-inactive.png";
import searchActive from "../styles/images/search-hover.png";
import searchInactive from "../styles/images/search-inactive.png";
import "../styles/nav.css";


function Nav() {
    const navigate = useNavigate();

    const [accountHover, setAccountHover] = useState(false);
    const [trackHover, setTrackHover] = useState(false);
    const [searchHover, setSearchHover] = useState(false);

    return (

//need to set pictures as hover, and import
<div id="Nav">
    <img 
    src={accountHover ? accountActive : accountInactive} alt="account button" 
    className="btn"
    onClick={()=> navigate("/account/:username")}
    onMouseOver={() => setAccountHover(true)}
    onMouseLeave={() => setAccountHover(false)}
    />
    <img 
    src={trackHover ? trackActive : trackInactive} alt="home button" 
    className="btn"
    onClick={()=> navigate("/dashboard")}
    onMouseOver={() => setTrackHover(true)}
    onMouseLeave={() => setTrackHover(false)}
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