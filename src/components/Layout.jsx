import { Outlet, Link } from "react-router-dom";
import img from "../assets/icon-menu.svg";
import docIcon from "../assets/icon-document.svg";
import trashIcon from "../assets/icon-delete.svg";
import saveIcon from "../assets/icon-save.svg";
import logo from "../assets/logo.svg";
import "./style/layout.css";

const Layout = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__menu">
                    <img src={img} alt="menu" />
                </div>
                <div className="nav__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav__doc">
                    <img src={docIcon} alt="doc" />
                    <div>
                        <label>Document Name</label>
                        <input type="text"  />
                    </div>
                </div>
                <div className="nav__options">
                    <button className="btn btn--delete">
                        <img src={trashIcon} alt="trash" />
                    </button>
                    <button className="btn btn--save">
                        <img src={saveIcon} alt="save" />
                       <span > Save Changes </span>
                    </button>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
