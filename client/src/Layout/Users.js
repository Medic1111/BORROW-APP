import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import { getUsers } from "../../../server/database/queries";
import Nav from "./Nav"
//importing the axios call to get all users, calling listUserInfo for now
//import ErrorAlert


function Users(){
    const history = useHistory();

    const [user, setUser] = useState([]);
    const [userError, setUserError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setUserError(null);
        getUsers(abortController.signal)
        .then(setUser)
        .catch(setUserError);
        return () => abortController.abort();
    }, []);


    const {
        user_id,
        username,
        phoneNumber,
        status,
//whatever needs to be added
    } = user;

return (
    <>
    <tr key={user_id}>
        <td className="rowBorder">{username}</td>
        <td className="rowBorder">{phoneNumber}</td>
        <td data-user-id-status={user_id} className="rowBorder">
        Currently:  {status}
        </td>
        <td>
          {status === "locked" ?  null :
          <div>
          {/* buttons we want to show for accounts that are not locked */}
           <a
              href={`/create`}
              type="button"
              className="btn btn-secondary mx-2"
            >
              Borrow From
            </a>
          </div> 
          }
          
        </td>
        <div><Nav/></div>
      </tr>
      
    </>
)

}

export default Users;