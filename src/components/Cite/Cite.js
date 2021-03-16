import React from "react";
import './Cite.scss'

export const Cite = () => {
    return (
        <div className={'cite'}>
            <div className={'cite__main'}>
                <img src="../../assets/images/cite.svg" alt=""/>
                <p>In quoting others we cite ourselves</p>
                <img className={'cite__border'} src="../../assets/images/backside.svg" alt=""/>
                <img src="../../assets/images/cite.svg" alt=""/>
            </div>
        </div>
    )
}