import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header/Header";
import AnimeBrowser from "./Browser/AnimeBrowser";
import AnimeList from './AnimeList/AnimeList';
import Footer from "./Footer/Footer";
import ArrowIcon from "../scss/images/arrow.png";

const App = () => {
    const [showAnimeList, setShowAnimeList] = useState(false);

    return (
        <div className='app'>
            <Header setShowAnimeList={setShowAnimeList}/>
            <a href="#header">
                <img
                    src={ArrowIcon}
                    alt="arrow-icon"
                    style={{
                        position: "fixed",
                        zIndex: 1,
                        bottom: "100px",
                        right: "100px",
                    }}
                />
            </a>
            {showAnimeList && <AnimeList/>}
            <AnimeBrowser/>
            <Footer/>
        </div>
    );
}

export default App;