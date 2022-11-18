import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../error-handling/ProtectedRoute";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import Register from "./Register";
import CreateEntry from "./CreateEntry";
import "../styles/layout.css";
import Nav from "./Nav";

export default function Layout(){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");
    // user gets a token when registering OR logging in
    // wrapper for route protection
    // send state for 'setToken' to log in and register
    
    return (
        <main>

        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={<LogIn setIsAuth={setIsAuth}/>}/>
            <Route path="/register" element={<Register setIsAuth={setIsAuth}/>}/>
            <Route path="/dashboard" element={<ProtectedRoute isAuth={isAuth}><Dashboard/></ProtectedRoute>}/>
            <Route path="/create" element={<ProtectedRoute isAuth={isAuth}><CreateEntry/></ProtectedRoute>}/>
            {/* a history page ? */}
           
        </Routes>
        <Nav/>
        </main>

    )
};