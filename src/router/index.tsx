import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import LoginContainer from '../components/LoginContainer';

export default function index() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginContainer />} />
        </Routes>
    );
}
