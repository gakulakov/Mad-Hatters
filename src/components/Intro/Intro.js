import React from "react";
import './Intro.scss'
import {Button} from "../../templates/Button/Button";

export const Intro = () => {
    return (
        <div className={'intro'}>
            <div className="intro__left">
                <p className={'intro__value'}>Introducing</p>
                <div className={'intro__title'}>
                    <p>Mad hatters, </p>
                    <p><span><sup>b</sup>/<small>c</small></span> style matters</p>
                </div>
                {/*<button>Learn more</button>*/}
                <Button value={'Learn more'} />
            </div>
            <div className="intro__right">
                <img src="../../assets/images/inroducing/1.png" alt=""/>
                <img src="../../assets/images/inroducing/2.png" alt=""/>
            </div>

        </div>
    )
}