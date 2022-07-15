import React from 'react';
import Markdown from './Markdown';
import SingIn from './SingIn';
import SingUp from './SingUp';
import YourNotes from './YourNotes';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SingIn />} ></Route>
            <Route path="/cadastro" element={<SingUp />} ></Route>
            <Route path="/markdown" element={<Markdown />} ></Route>
            <Route path="/yournotes" element={<YourNotes />} ></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
