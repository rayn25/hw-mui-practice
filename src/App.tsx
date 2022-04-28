// import './App.scss';
import React from 'react';
import Router from './router';
import Header from './pages/Header';
import Menus from './pages/Menus';

function App() {
    // TODO 로그인 안되어있으면 로그인 페이지로 이동

    return (
        <>
            <Header />
            <Menus />
            <Router />
        </>
    );
}

export default App;
