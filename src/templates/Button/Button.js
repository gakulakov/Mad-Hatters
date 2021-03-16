import React from "react";
import './Button.scss'

export const Button = ({value, handler = (value) => console.log('click button', value)}) => {
    return (
        <>
            <button className={'button'} onClick={() => handler(value)}>{value}</button>
        </>
    )
}