import React from 'react';
import { useEffect } from 'react';
import ThemeSwitcher from '../components/themeSwitcher/ThemeSwitcher';

const Home = () => {
    const handleKeyDown = (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'c') {
            event.preventDefault();
            console.log('Command+N or Ctrl+N pressed');
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
    }, []); 

    return <>

        <div >
            <h1>Home</h1>
        </div>
    </>;
};

export default Home;
