import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { FileProvider } from './store/fileContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FileProvider>
                <App />
            </FileProvider>
        </BrowserRouter>
    </React.StrictMode>
);

