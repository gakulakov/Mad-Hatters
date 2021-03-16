import React from "react";
import './News.scss'
import {Button} from "../../templates/Button/Button";


export const News = () => {
    return (
        <div className={'news-container'}>
            <div className={'news'}>
                <div className={'news__title'}>
                    <p>Keep up-to-date on us</p>
                    <p>Newsletter</p>
                </div>

                <div className={'news__email'}>
                    <input type="text" placeholder='Enter your email'/>
                    <Button value={'Submit'}/>
                </div>
            </div>
        </div>
    )
}