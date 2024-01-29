import React from 'react';
import './style/footer.css';
import LikedIn_Logo from '../assets/linkedin_icon.svg';
import GitHub_Logo from '../assets/github_icon.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Made With ❤️  By Yosef Adel</p>
            <div className='footer__social'>
                <a href='https://www.linkedin.com/in/yosef-adel/' target='_blank' rel='noreferrer'>
                    <img src={LikedIn_Logo} alt='LinkedIn Logo' />
                </a>
                <a href='https://github.com/Yosef-Adel/' target='_blank' rel='noreferrer'>
                    <img src={GitHub_Logo} alt='GitHub Logo' />
                </a>
            </div>
        </footer>
    );

};

export default Footer;
