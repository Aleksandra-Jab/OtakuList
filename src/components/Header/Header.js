import React, { useState } from "react";
import "../../scss/elements/_Header.scss";
const Header = ({ setShowAnimeList }) => {
    const OpenAnimeList = (e) => {
        e.preventDefault();
        setShowAnimeList(true);
        document.getElementById("anime-list").style.display = "";
    }

    return (
        <div className="header" id="header">
            <div className="header__container">

                <div className="header__nav">
                    <div className="nav__left">
                        <h3><a href="https://github.com/Aleksandra-Jab/OtakuList" target="_blank">jabczyns</a></h3>
                    </div>

                    <div className="nav__right">
                        <ul className="nav__items">
                            <li className="nav__item">
                                <a className="nav__item-link" href="index.html">home</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__item-link" href="anime-list" onClick={OpenAnimeList}>anime list</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__item-link" href="#search">browse anime</a>
                            </li>
                        </ul>
                        <a className="nav__login" onClick={() => alert("My apologies. Login doesn't work.")}>Log in</a>
                    </div>
                </div>

                <div className="header__title">
                    <h1>Otaku List</h1>
                    <h2>Stay up to date <br/>
                        with your episodes</h2>
                </div>

                <div className="header__description">
                    <p>
                        I am honored to serve you this website. Feel free to use it. <br/>
                        Browse and collect as many title as you wish.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;