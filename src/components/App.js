import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';

import GlobalStyle from '../styles/globalStyle';

import EditNote from './EditNote';

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EditNote />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
