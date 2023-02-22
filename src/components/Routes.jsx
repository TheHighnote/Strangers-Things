import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./Main";
import { Login } from "./Login";

const AllRoutes = ({setToken}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login setToken={setToken}/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;