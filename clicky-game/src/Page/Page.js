import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar';
import GameContainer from '../components/Game/GameContainer';
import './Page.css';
import images from './images.json';
import Card from '../components/Cards/Card';

class GamePage extends Component {

    state = {
        imageTiles: [],
        currentImage: {},
        winOrLose: 'Click an image to begin',
        score: 0,
    }

    shuffleImages = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    componentDidMount = () => {

        const shuffledArr = this.shuffleImages(images)

        this.setState({
            imageTiles: shuffledArr,
            clicked: [],
            score: 0
        })
    }

    imageWasClicked = id => {

        const shuffledArr = this.shuffleImages(images)

        if(this.state.clicked.indexOf(id) === -1) {
            this.setState({
                clicked: this.state.clicked.concat(id),
                imageTiles: shuffledArr,
                winOrLose: ''
            })
            this.increaseScore()
        } else {
            this.setState({
                winOrLose: 'Looks like another one broke off!'
            })
            this.componentDidMount()
        }
    }

    increaseScore = () => {
        
        if(this.state.score !== 11){
            this.setState({
                score: this.state.score + 1
            })
        } else {
            this.setState({
                score: this.state.score + 1,
                winOrLose: 'Looks like you landed a trophy! Winner winner trout dinner!'
            })
            this.componentDidMount()
        }
        
    }

    render(){
        return(
            <Fragment>
                <NavBar score={this.state.score} winOrLose={this.state.winOrLose} />
                <GameContainer>
                    { this.state.imageTiles.map( image => (
                            <Card src={image.src} clicked={image.clicked} title={image.title} id={image.id} key={image.id} imageWasClicked={this.imageWasClicked} />
                    )) }
                </GameContainer>
            </Fragment>
        );
    }
}

export default GamePage;