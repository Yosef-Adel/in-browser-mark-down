import React from 'react';

import Home from './pages/Home';
import EditPage from './pages/EditPage';
import NoPage from './pages/NoPage';
import Layout from './components/Layout';

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
