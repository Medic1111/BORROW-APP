import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../error-handling/ProtectedRoute";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import Register from "./Register";
import CreateEntry from "./CreateEntry";
import UserAccount from "./UserAccount";
import Search from "./Search";
import "../styles/layout.css"

export default function Layout(){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const [loans, setLoans] = useState([]);
    const userValidation = (JSON.parse(localStorage.getItem("userValidation")));

    useEffect(() => {
        console.log(userValidation.token)
        console.log(isAuth);

        const isTokenExp = () => {
          const storedData = localStorage.getItem("userValidation");
      
          if (typeof storedData === "string") {
            const parse = JSON.parse(storedData);
      
            if (parse && new Date(parse.expiration) > new Date()) {
              return setIsAuth(true);
            } else {
              return setIsAuth(false);
            }
          }
        };
        isTokenExp();
    }, []);

    
    return (
        <main>

        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={
                <LogIn 
                    setIsAuth={setIsAuth} 
                    setToken={setToken} 
                    setUser={setUser}
                    setLoans={setLoans}/>}/>
            <Route path="/register" element={
                <Register 
                    setIsAuth={setIsAuth} 
                    setToken={setToken} 
                    setUser={setUser}/>}/>
            <Route path="/dashboard" element={
                <ProtectedRoute isAuth={isAuth} setIsAuth={setIsAuth} token={token}>
                    <Dashboard user={user} loans={loans}/>
                </ProtectedRoute>}/>
            <Route path="/create/:tradee" element={
                <ProtectedRoute isAuth={isAuth} token={token}>
                    <CreateEntry/>
                </ProtectedRoute>}/>
            <Route path="/account/:username" element={
                <ProtectedRoute isAuth={isAuth} token={token}>
                    <UserAccount user={user}/>
                </ProtectedRoute>}/>
            <Route path="/search" element={<Search user={user}/>}/>
        </Routes>
        </main>

    )
};