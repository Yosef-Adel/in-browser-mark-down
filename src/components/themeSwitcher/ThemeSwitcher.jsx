import React from 'react';
import { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ReactComponent as Sun } from '../../assets/icon-light-mode.svg';
import { ReactComponent as Moon } from '../../assets/icon-dark-mode.svg';
import './DarkMode.css';
const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false, 'theme');
    const changeHandeler = (data) => {
        setDarkMode(data.target.checked);
        if (data.target.checked) {
            document.querySelector("body").setAttribute("data-theme", "dark");
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    };
    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").setAttribute("data-theme", "dark");
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    }, [darkMode]);

    return (
        <>
            <div className='dark_mode'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    checked={darkMode} onChange={changeHandeler}
                />
                <label className='dark_mode_label' for='darkmode-toggle'>
                    <Sun />
                    <Moon />
                </label>
            </div>
        </>
    );
};

export default ThemeSwitcher;

