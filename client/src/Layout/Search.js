import React, {useState} from "react";
// import Users from "./Users";
import { getUserByUsername } from "../utils/api";
import Nav from "./Nav";
import submitActive from "../styles/images/submit-hover.png";
import submitInactive from "../styles/images/submit-inactive.png";
import "../styles/search.css"

//axios calls
//import the function that will list all of the users info, How to call getUserByUsername for now

//errors
//import ErrorAlerts

function Search({user}) {
    // const userName = {username: ""};
    const [usernameSearch, setUsernameSearch] = useState("");
    
    const [submitHover, setSubmitHover] = useState(false);
    const [searchUser, setSearchUser] = useState({})
    const [userError, setUsersError] = useState(null);

    function loadSearch(event) {
      event.preventDefault();
        const abortController = new AbortController();
        setUsersError(null);
        getUserByUsername(usernameSearch, abortController.signal)
        .then(({ user })=>setSearchUser(user))
        .catch(setUsersError);

        return () => abortController.abort();
    }

    const changeHandler = (event) => { 
        setUsernameSearch(event.target.value);
    };

    // const usersList = users.map((user) => (<Users key={user.user_id} user={user}/>));


    return (
    <div id="Search">
      <h1>Search</h1>
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
    ? <div>
        <p>username: {searchUser.username}</p>
        <p>email: {searchUser.email}</p>
        <p>rep: {searchUser.reputation}</p>
      </div>
      : null}

      <Nav/>
    </div>
  );

    
}

export default Search;