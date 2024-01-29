import React from 'react';
import {useNavigate } from "react-router-dom";
import {FileContext } from "../store/fileContext";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher.jsx";
import FileCard from "./FileCard";
import { v4 as uuidv4 } from 'uuid';
import "./style/sidebar.css";

const SideBar = () => {
    const { files,  addFile, } = React.useContext(FileContext);
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
    return (
        <div>
            <div className="sidebar">
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
        </div>
    );
};

export default SideBar;
