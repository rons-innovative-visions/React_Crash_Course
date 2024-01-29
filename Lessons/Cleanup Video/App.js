import React from 'react';
import './index.css';
import {VideoList} from './Pages'
import {Navbar, Footer} from './Components'

function App() {
    return <>
        <Navbar/>
        <VideoList />
        <Footer/>
    </>
}

export default App
