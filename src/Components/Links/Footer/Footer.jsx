import React from 'react';
import Zuri from "../../../Assets/Zuri.png";
import I4G from "../../../Assets/I4G.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img src={Zuri} alt="Zuri internship logo" />
            </div>
            <div className="footer__text">
                <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div className="footer__img">
                <img src={I4G} alt="Ingresive for good logo" />
            </div>
        </footer>
    )
}

export default Footer;