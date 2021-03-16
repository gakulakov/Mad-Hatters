import React from "react";
import './List.scss'

export const List = () => {
    return(
        <div className={'list'}>
            <div className="list__item">
                <div className={'list__inner'}>
                    <img src="../../assets/images/logo.svg" alt="logo"/>
                    <p className={'list__title'}>Brands</p>
                </div>
                <p className={'list__value'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.</p>
            </div>
            <div className="list__item">
                <div className={'list__inner'}>
                    <img src="../../assets/images/logo.svg" alt="logo"/>
                    <p className={'list__title'}>Styles</p>
                </div>
                <p className={'list__value'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.</p>
            </div>
            <div className="list__item">
                <div className={'list__inner'}>
                    <img src="../../assets/images/logo.svg" alt="logo"/>
                    <p className={'list__title'}>Colors</p>
                </div>
                <p className={'list__value'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.</p>
            </div>
        </div>
    )
}