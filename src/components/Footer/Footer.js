import React from "react";
import './Footer.scss'


export const Footer = () => {
    return (
        <div className={'footer-container'}>
            <div className={'footer'}>
                <div className={'footer__left'}>
                    <div className={'footer__top'}>
                        <div className={'footer__logo'}>
                            <img src="../../assets/images/logofooter.svg" alt="logo"/>
                            <p>Mad Hatters</p>
                        </div>
                        <p className={'footer__value'}>Be better, be cooler, be a Mad Hatter and sustainably matter.</p>
                    </div>
                    <p className={'footer__copyright'}>Copyright 2012 Mad Hatters, Inc. Terms & Privacy</p>
                </div>
                <div className={'footer__right'}>
                    <div className="footer__list">
                        <div className={'footer__title-list'}>
                            <img src="../../assets/images/logofooter.svg" alt="logo"/>
                            <p>Shop here</p>
                        </div>
                        <p>For Men</p>
                        <p>For Women</p>
                        <p>For Kids</p>
                        <p>For Anyone</p>
                        <p>For No-one</p>
                    </div>
                    <div className="footer__list">
                        <div className={'footer__title-list'}>
                            <img src="../../assets/images/logofooter.svg" alt="logo"/>
                            <p>The legals</p>
                        </div>
                        <p>Copyright</p>
                        <p>Privacy</p>
                        <p>Contact</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}