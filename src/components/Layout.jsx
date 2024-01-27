import { Outlet, useParams, useNavigate } from "react-router-dom";
import img from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import docIcon from "../assets/icon-document.svg";
import trashIcon from "../assets/icon-delete.svg";
import saveIcon from "../assets/icon-save.svg";
import logo from "../assets/logo.svg";
import React, { useState, useEffect } from "react";
import { FileContext } from "../store/fileContext";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher.jsx";
import FileCard from "./FileCard";
import "./style/layout.css";
import { v4 as uuidv4 } from 'uuid';

const Layout = () => {
    const { id } = useParams();
    const [docName, setDocName] = useState("");
    const [isOpened, setIsOpened] = useState(false);
    const { files, updateFile, addFile, removeFile } = React.useContext(FileContext);
    const [sidebar, setSidebar] = useState(false);
    let uid;
    const navigate = useNavigate();

    const addNewFile = () => {
        uid = uuidv4();
        addFile(
            'Untitled',
            '',
            uid,
        );
    }
    const addNewFileHandler = () => {
        addNewFile();
        navigate(`/edit/${uid}`);

    }

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
    const showSidebar = () => {
        setSidebar(!sidebar);
        document.querySelector(".nav").classList.toggle("nav--opend");
        document.querySelector(".nav__menu--open").classList.toggle("hide");
        document.querySelector(".nav__menu--close").classList.toggle("show");
        // sellect all class nav__sidebar and toggle class nav__sidebar--opend 
        document.querySelectorAll(".nav__sidebar").forEach((item) => {
            item.classList.toggle("nav__sidebar--opend");
        })
        // sellect all class layout__main and toggle class layout__main--opend 
        document.querySelectorAll(".layout__main").forEach((item) => {
            item.classList.toggle("layout__main--opend");
        })
        document.querySelector(".sidebar").classList.toggle("sidebar--opend");

    }
    const deleteHandeler = () => {
        removeFile(id);
        navigate(`/`);
    }
    return (
        <>
            <nav className="nav">
                <div className="nav__sidebar ">
                    <h1>My Documents</h1>
                </div>
                <div className="nav__menu" >
                    <img className="nav__menu--open" src={img} alt="menu" onClick={showSidebar} />
                    <img className="nav__menu--close" src={close} alt="menu" onClick={showSidebar} />
                </div>
                <div className="nav__logo" onClick={()=> navigate("/")}  >
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
                                    onBlur={onBlurHandler}
                                />
                            </div>
                        </div>
                        <div className="nav__options">
                            <button className="btn btn--delete" onClick={deleteHandeler}>
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
            <div className="layout__main">
                <div className="nav__sidebar sidebar">
                    <div className="sidebar__main">
                        <button className="btn btn--save" onClick={addNewFileHandler}>
                            + Add Document
                        </button>
                        {
                            files.map((file) => {
                                return (
                                    <FileCard file={file} key={file.id} />
                                )
                            })
                        }

                    </div>
                    <div className="sidebar__options">
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
};

export default Layout;
