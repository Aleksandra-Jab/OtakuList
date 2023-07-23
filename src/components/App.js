import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header/Header";
import AnimeBrowser from "./Browser/AnimeBrowser";

const App = () => {

    return (
        <div className='app'>
            <Header/>
            <AnimeBrowser/>
        </div>
    );
}

export default App;