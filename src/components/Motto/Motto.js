import React from "react";
import './Motto.scss'
import {Button} from "../../templates/Button/Button";

export const Motto = () => {
    return (
        <div className={'motto'}>
            <div className={'motto__left'}>
                <img src="../../assets/images/girl.png" alt="girl"/>
            </div>
            <div className="motto__right">
                <p className={'motto__prefix'}>Become sexy</p>
                <p className={'motto__text'}>Mad love for f ire headwear</p>
                <Button value={'Learn more'} />
            </div>
        </div>
    )
}