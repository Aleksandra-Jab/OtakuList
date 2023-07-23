import React from "react";
import "../../scss/elements/_Footer.scss";
import WomanIcon from "../../scss/images/woman-icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__column">
                    <p>
                        You can find this project on GitHub <br/>
                        Just click the link below
                    </p>
                    <h3><a href="https://github.com/Aleksandra-Jab/OtakuList" target="_blank">Aleksandra-Jab/OtakuList</a></h3>
                </div>
                <div className="footer__container__column">
                    <a href="https://github.com/Aleksandra-Jab" target="_blank">
                        <img src={WomanIcon} alt="woman-icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;