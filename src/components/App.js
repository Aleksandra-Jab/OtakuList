import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header/Header";
import AnimeBrowser from "./Browser/AnimeBrowser";
import Footer from "./Footer/Footer";

const App = () => {

    return (
        <div className='app'>
            <Header/>
            <AnimeBrowser/>
            <Footer/>
        </div>
    );
}

export default App;