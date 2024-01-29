import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FileContext } from "../store/fileContext";
import img from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import docIcon from "../assets/icon-document.svg";
import trashIcon from "../assets/icon-delete.svg";
import saveIcon from "../assets/icon-save.svg";
import logo from "../assets/logo.svg";
import "./style/nav.css";
import DeletePopup from "./DeletePopup";

const Nav = () => {
    const { id } = useParams();
    const [docName, setDocName] = useState("");
    const [isOpened, setIsOpened] = useState(false);
    const { files, updateFile, removeFile } = React.useContext(FileContext);
    const [sidebar, setSidebar] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setIsOpened(true);
            const file = files.find((file) => file.id === id);
            console.log(file);
            setDocName(file.name);
            document.title = `${file.name}`;
        }
        else {
            setIsOpened(false);
            document.title = `in browser markdown editor`;
        }
    }, [id, files]);

    const showSidebar = () => {
        setSidebar(!sidebar);
        document.querySelector(".nav__menu--open").classList.toggle("hide");
        document.querySelector(".nav__menu--close").classList.toggle("show");

        document.querySelector(".nav").classList.toggle("nav--opend");
        document.querySelector(".layout__main").classList.toggle("layout__main--opend");

        document.querySelectorAll(".sidebar").forEach((item) => {
            item.classList.toggle("sidebar--opend");
        })

    }

    // hadelers
    const onBlurHandler = () => {
        const file = files.find((file) => file.id === id);
        const name = docName;
        const content = file.content;
        updateFile(id, name, content);

    }
    const deleteHandeler = () => {
        removeFile(id);
        setOnDelete(false);
        navigate(`/`);
    }

    const onCloseModal = () => {
        setOnDelete(false);
    }

    const downloadMarkdown = () => {
        const file = files.find((file) => file.id === id);
        const element = document.createElement("a");
        const fileContent = file.content;
        const fileContentBlob = new Blob([fileContent], { type: "text/plain" });
        const url = URL.createObjectURL(fileContentBlob);
        element.href = url;
        element.download = `${file.name}.md`;
        document.body.appendChild(element);
        element.click();
    }

    return (
        <>
            <nav className="nav">
                <div className="sidebar ">
                    <h1>My Documents</h1>
                </div>
                <div className="nav__menu" onClick={showSidebar} >
                    <img className="nav__menu--open" src={img} alt="menu" />
                    <img className="nav__menu--close" src={close} alt="menu" />
                </div>
                <div className="nav__logo" onClick={() => navigate("/")}  >
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
                                    onChange={(e) => setDocName(e.target.value)}
                                    onBlur={onBlurHandler}
                                />
                            </div>
                        </div>
                        <div className="nav__options">
                            <button className="btn btn--delete" onClick={() => setOnDelete(true)}>
                                <img src={trashIcon} alt="trash" />
                            </button>
                            <button className="btn btn--save" onClick={downloadMarkdown}>
                                <img src={saveIcon} alt="save" />
                                <span > Save Changes </span>
                            </button>
                        </div>
                    </>
                )}
            </nav>
            {
                onDelete && (
                    <DeletePopup docName={docName} onCloseModal={onCloseModal} deleteHandeler={deleteHandeler} />
                )
            }
        </>
    );
};

export default Nav;
