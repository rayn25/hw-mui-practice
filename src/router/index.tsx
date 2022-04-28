import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginContainer from 'components/LoginContainer';
import Dashboard from 'pages/Dashboard';
import Users from 'pages/Users';
import Projects from 'pages/Projects';
import Settings from 'pages/Settings';
import Error404 from 'error/Error404';

export default function index() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
