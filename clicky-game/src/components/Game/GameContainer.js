import React from 'react';

const Game = props => {

    return (
        <div className='text-center container clearfix' >
            {props.children}
        </div>
    );

}

export default Game;