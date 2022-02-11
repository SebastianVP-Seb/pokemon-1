import React from 'react'
import './card.scss';

function Card({item}) {


    return (
        <div className='card' >
            <p className='card_signo' >?</p>
            <p className='card_title' >{item.name}</p>
        </div>
    )
}

export default Card
