import { Outlet,  useParams } from "react-router-dom";
import img from "../assets/icon-menu.svg";
import docIcon from "../assets/icon-document.svg";
import trashIcon from "../assets/icon-delete.svg";
import saveIcon from "../assets/icon-save.svg";
import logo from "../assets/logo.svg";
import React, { useState, useEffect } from "react";
import { FileContext } from "../store/fileContext";
import "./style/layout.css";

const Layout = () => {
    const { id } = useParams();
    const [docName, setDocName] = useState("");
    const [isOpened, setIsOpened] = useState(false);
    const { files , updateFile} = React.useContext(FileContext);

    useEffect(() => {
        if (id) {
            setIsOpened(true);
            const file = files.find((file) => file.id === id);
            setDocName(file.name);
        }
        else {
            setIsOpened(false);
        }
    }, [id, files]);

    const handleInputChange = (event) => {
        setDocName(event.target.value);
    };
    const onBlurHandler = () => {
        const file = files.find((file) => file.id === id);
        const name = docName;
        const content = file.content;
        updateFile(id, name, content);
        
    }
    return (

        <>
            <nav className="nav">
                <div className="nav__menu">
                    <img src={img} alt="menu" />
                </div>
                <div className="nav__logo">
                    <img src={logo} alt="logo" />
                </div>
                {isOpened && (
                    <>
                        <div className="nav__doc">
                            <img src={docIcon} alt="doc" />
                            <div>
                                <label>Document Name</label>
                                <input type="text"
                                    value={docName} 
                                    onChange={handleInputChange}
                                    onBlur = {onBlurHandler}
                                />
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
                    </>
                )}
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
