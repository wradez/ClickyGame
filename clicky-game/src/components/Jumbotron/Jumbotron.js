import React from 'react';

const Jumbotron = props => {

        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Clicky Game</h1>
                    <p className="lead">Click each image once. For each unclicked image, you get 1 point. Click an image twice and reset the score. Get a score of 12 to win.</p>
                    <h4 className='score' >Score: {props.score}</h4>
                </div>
            </div>
        );
}

export default Jumbotron;