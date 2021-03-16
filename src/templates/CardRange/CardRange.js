import React from "react";
import './CardRange.scss'


export const CardRange = ({imgUrl, title, value}) => {
    return (
        <div className={'card-range'}>
            <img src={imgUrl} alt={title}/>
            <div className={'card-range__body'}>
                <p>{title}</p>
                <p>{value}</p>
            </div>
        </div>
    )
}