import React, {useState} from "react";
import Users from "./Users";

//axios calls
//import the function that will list all of the users info, How to call getUserByUsername for now

//errors
//import ErrorAlerts

function Search() {
    const userName = {username: ""};
    const [usersName, setUsersName] = useState({...userName});
    
    const [searchUser, setSearchUser] = useState([])
    const [userError, setUsersError] = useState(null);

    function loadSearch(event) {
        event.preventDefault();
        const abortController = new AbortController();
        setUsersError(null);
        getUserByUsername(userName, abortController.signal)
        .then(setSearchUser)
        .catch(setUsersError);

        return () => abortController.abort();

    }

    const changeHandler = (event) => { 
        setUsersName({...usersName, [event.target.name] : event.target.value});
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
            value={user.username}
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
    </div>
  );

    
}

export default Search;