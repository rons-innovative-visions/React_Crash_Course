import React from 'react';
import './index.css';
import {VideoList, Navbar, Footer} from './Pages'

function App() {
    return <>
        <Navbar/>
        <VideoList />
        <Footer/>
    </>
}

export default App