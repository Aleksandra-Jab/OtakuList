import React from "react";
import "../../scss/elements/_Header.scss";
const Header = () => {
    return (
        <div className="header">
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
                                <a className="nav__item-link" href="animelist.html">anime list</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__item-link" href="#search">browse anime</a>
                            </li>
{/*                            <li className="nav__item">
                                <a className="nav__item-link" href="#generator">recommendation</a>
                            </li>*/}
                        </ul>
                        <a className="nav__login" onClick={() => alert("Przykro mi. To tylko figurant. Nie działa - wygląda.")}>zaloguj</a>
                    </div>
                </div>

                <div className="header__title">
                    <h1>Otaku List</h1>
                    <h2>Bądź na bieżąco <br/>
                        ze swoimi odcinkami</h2>
                </div>
                <div className="header__description">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Header;