import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><h4>The Fishy Clicky Game</h4></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item score">
                        <h4>Score: {props.score} </h4>
                    </li>
                    <li className="nav-item message">
                        <h4>{props.winOrLose} </h4>
                    </li>
                </ul>
            </div>
        </nav>
    );

export default NavBar;