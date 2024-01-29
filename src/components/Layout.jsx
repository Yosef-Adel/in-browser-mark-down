import { Outlet } from "react-router-dom";
import React from "react";
import "./style/layout.css";
import Nav from "./Nav";
import SideBar from "./SideBar";

const Layout = () => {
    return (
        <>
            <Nav />
            <div className="layout__main">
                <SideBar/>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
};

export default Layout;
