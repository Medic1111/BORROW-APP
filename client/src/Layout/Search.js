import React, {useState} from "react";
// import Users from "./Users";
import { getUserByUsername } from "../utils/api";
import Nav from "./Nav";

//axios calls
//import the function that will list all of the users info, How to call getUserByUsername for now

//errors
//import ErrorAlerts

function Search({user}) {
    // const userName = {username: ""};
    const [usernameSearch, setUsernameSearch] = useState("");
    
    const [searchUser, setSearchUser] = useState([])
    const [userError, setUsersError] = useState(null);

    function loadSearch(event) {
      event.preventDefault();
        const abortController = new AbortController();
        setUsersError(null);
        getUserByUsername(usernameSearch, abortController.signal)
        .then(setSearchUser)
        .catch(setUsersError);

        return () => abortController.abort();
    }

    const changeHandler = (event) => { 
        setUsernameSearch(event.target.value);
    };

    // const usersList = users.map((user) => (<Users key={user.user_id} user={user}/>));


    return (
    <div>
      <h1>Search page</h1>
      <form onSubmit={loadSearch}>
        <div>
          <input
            placeholder="Search Username"
            onChange={changeHandler}
            value={usernameSearch}
            required
            name="username"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Search
        </button>
      </form>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">USERNAME</th>
            <th scope="col">NAME</th>
            <th scope="col">Email</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {searchUser ? (
            // how we want to list out the users
            (searchUser.status === "locked") ? null :
            searchUser
          ) : (
            <tr>
              <td>Cannot find this Username</td>
            </tr>
          )}
        </tbody>
      </table>
      <Nav/>
    </div>
  );

    
}

export default Search;