import React from "react";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";

const HomeLayout = () => {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Outlet></Outlet>
        </>
    );
};

export default HomeLayout;