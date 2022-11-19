import React, {useState} from "react";
// import Users from "./Users";
import { getUserByUsername } from "../utils/api";
import Nav from "./Nav";
import submitActive from "../styles/images/submit-hover.png";
import submitInactive from "../styles/images/submit-inactive.png";
import borrowActive from "../styles/images/borrow-hover-1.png";
import borrowInactive from "../styles/images/borrow-inactive-1.png";
import lendActive from "../styles/images/lend-hover.png";
import lendInactive from "../styles/images/lend-inactive.png";
import "../styles/search.css"
import { Navigate, useNavigate } from "react-router-dom";

//axios calls
//import the function that will list all of the users info, How to call getUserByUsername for now

//errors
//import ErrorAlerts

function Search({ user, setUser }) {
    // const userName = {username: ""};
    const navigate = useNavigate();
    const [usernameSearch, setUsernameSearch] = useState("");
    const [submitHover, setSubmitHover] = useState(false);
    const [borrowHover, setBorrowHover] = useState(false);
    const [lendHover, setLendHover] = useState(false);
    const [searchUser, setSearchUser] = useState({})
    const [searchError, setSearchError] = useState(null);

    function loadSearch(event) {
      event.preventDefault();
        const abortController = new AbortController();
        setSearchError(null);
        if(usernameSearch === user){
          return setSearchError("we all wish to search for ourselves...")
        }
        getUserByUsername(usernameSearch, abortController.signal)
        .then((user) => setSearchUser(user))
        .catch((err)=>setSearchError(err.message));

        return () => abortController.abort();
    }

    const changeHandler = (event) => { 
        setUsernameSearch(event.target.value);
    };

    console.log(user)

    return (
    <div id="Search">
      <h1>Search User</h1>
      {searchError && <p>{searchError}</p>}
      <form onSubmit={loadSearch}>
        <div>
          <input
            placeholder="search username"
            onChange={changeHandler}
            value={usernameSearch}
            required
            name="username"
          />
        </div>
        <button type="submit">
          <img 
              src={submitHover ? submitActive : submitInactive}
              onMouseOver={()=>setSubmitHover(true)}
              onMouseLeave={()=>setSubmitHover(false)}
              id="submit"/>
        </button>
      </form>
    {searchUser.username 
    ? <div id="user">
        <div>
          <p>username: {searchUser.username}</p>
          <p>email: {searchUser.email}</p>
          <p>rep: {searchUser.reputation}</p>
        </div>
        <img
          src={borrowHover ? borrowActive : borrowInactive}
          className="borrow-lend"
          onMouseOver={()=>setBorrowHover(true)}
          onMouseLeave={()=>setBorrowHover(false)}
          onClick={()=>{
            setUser((prevState) => ({...prevState, isBorrower: true}))
            navigate(`/create/${searchUser.username}`)
            }}/>
        <img
          src={lendHover ? lendActive : lendInactive}
          className="borrow-lend"
          onMouseOver={()=>setLendHover(true)}
          onMouseLeave={()=>setLendHover(false)}
          onClick={()=>{
            setUser((prevState) => ({...prevState, isBorrower: false}))
            navigate(`/create/${searchUser.username}`)
            }}/>
        {/* <img
          src={borrowHover ? borrowActive : borrowInactive}
          onMouseOver={()=>setBorrowHover(true)}
          onMouseLeave={()=>setBorrowHover(false)}
          onClick={()=>navigate(`/create/${searchUser.username}`)}
          id="borrow-button"/> */}
      </div>
      : null}

      <Nav/>
    </div>
  );

    
}

export default Search;