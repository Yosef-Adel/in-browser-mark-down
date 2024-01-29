import { Outlet } from "react-router-dom";
import React from "react";
import "./style/layout.css";
import Nav from "./Nav";
import SideBar from "./SideBar";
import Footer from "./Footer";

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
            <Footer />
        </>
    )
};

export default Layout;
