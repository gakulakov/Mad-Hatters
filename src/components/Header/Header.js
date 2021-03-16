import React from "react";
import './Header.scss'

export const Header = () => {
    return (
        <div className={'header-container'}>
            <div className={'header'}>
                <img src="../../assets/images/logo.svg" alt="logo"/>
                <p className={'header__title'}>MAD HATTERS</p>
                <div className={'header__links'}>
                    <p>For Men</p>
                    <p>For Women</p>
                    <p>For Kids</p>
                    <p>For Anyone</p>
                    <p>For No-one</p>
                </div>
            </div>
        </div>
    )
}
