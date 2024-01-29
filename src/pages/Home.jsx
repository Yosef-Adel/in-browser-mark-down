import React from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { FileContext } from '../store/fileContext.js';
import './style/home.css';

const Home = () => {
    const { addFile } = React.useContext(FileContext);
    const navigate = useNavigate();
    let id;

    const addNewFile = () => {
        id = uuidv4();
        addFile(
            'Untitled',
            '',
            id,
        );
    }
    const addNewFileHandler = () => {
        addNewFile();
        navigate(`/edit/${id}`);

    }

    const handleKeyDown = (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'c') {
            event.preventDefault();
            addNewFile();
            navigate(`/edit/${id}`);

        }
        if ((event.metaKey || event.ctrlKey) && event.key === 'o') {
            event.preventDefault();
            console.log('Command+O or Ctrl+O pressed');
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return <>
        <div className='home'>
            <h1>No File is Open</h1>
            <p onClick={addNewFileHandler}>Open  new file <span className='shortcut'>⌘+C</span></p>
            <p>Open an existing file <span className='shortcut'>⌘+O</span></p>
        </div>
    </>;
};

export default Home;
