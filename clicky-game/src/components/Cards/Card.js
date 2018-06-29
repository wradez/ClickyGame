import React from 'react';
import'./Card.css';

const Card = props => {

    return (
        <div className='float-left card game' key={props.id} onClick={ () => props.imageWasClicked(props.id)}>
            <img className='card-body' value={props.clicked} id={props.id} src={props.src} alt={props.title} />
        </div>
    )
}

export default Card;