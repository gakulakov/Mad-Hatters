import React, {useState} from "react";
import './Range.scss'
import {CardRange} from "../../templates/CardRange/CardRange";

export const Range = () => {

    const [open, setOpen] = useState('close')

    const mock = [
        {
            id: 1,
            imgUrl: '../../assets/images/photos/1.png',
            title: 'The pretender',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.'
        },
        {
            id: 2,
            imgUrl: '../../assets/images/photos/2.png',
            title: 'The influencer',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.'
        },
        {
            id: 3,
            imgUrl: '../../assets/images/photos/3.png',
            title: 'The andy cap',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.'
        },
        {
            id: 4,
            imgUrl: '../../assets/images/photos/4.png',
            title: 'The traveller',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum.'
        },
    ]

    const clickHandler = () => setOpen(prevState => prevState === 'close' ? 'open' : 'close')

    const cardGenerator = mock.map((i, index) => {
        return (
            <div
                key={i.id * index}
                className={index % 2 ? 'range__item-right' : 'range__item-left'}
            >
                <CardRange
                    imgUrl={i.imgUrl}
                    title={i.title}
                    value={i.value}
                />
            </div>
        )
    })

    return (
        <div className={'range'}>
            <div className={'range__title'}>
                <p>Hat’s that bring the fire</p>
                <p>Our Range</p>
            </div>
            <div className="range__body">
                {cardGenerator}
            </div>
            <div className={'range__more'}>
                <i></i>
                <div className={`range__text ${open}`} onClick={clickHandler}>
                    <p>+&nbsp;</p>
                    <p>Show more</p>
                </div>
                <i></i>
            </div>
        </div>
    )
};