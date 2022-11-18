import React from "react";
import { useParams } from "react-router-dom";

export default function UserAccount({ user }){
    const { username } = useParams();

    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
};
