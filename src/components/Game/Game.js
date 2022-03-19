import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            number: "",
            message: "Hola",
            random: generateRandomNumber(100)
        }
    }

    handleOnChange = e => {
        const {target: {value}} = e;
        if(value >= 0) {
            this.setState({number: value});
        }
    }

    handleOnClick = e => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);

        const text = calculateText(number, random);

        this.setState({
            message: text
        })
        e.preventDefault();
    }

    render() {
        return (
            /*<div className="Game">
                <input 
                    type="number"
                    value={this.state.number}
                    onChange = {this.handleOnChange}
                />

                <button onClick = {this.handleOnClick}>Probar</button>
                <p>{this.state.message}</p>
            </div>*/
            <form onSubmit={this.handleOnClick}>
                <div className="Game">
                <input 
                    type="number"
                    value={this.state.number}
                    onChange = {this.handleOnChange}
                />

                    <input type="submit" />
                    <p>{this.state.message}</p>
                </div>
            </form>
        );
    }
}

export default Game;

function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random() *(max - min) + min);
}

function calculateText(number, random) {
    console.log(number + "  " + random);
    if(number === random) {
        return "Felicidades acertaste";
    }
    else if(number < random) {
        if(random - number < 10) {
            return "Te quedaste corto, pero estas cerca";
        }
        else
            return "Te quedaste corto";
    }
    else {
        if(number - random < 10) {
            return "Te pasaste, pero estas cerca";
        }
        else
            return "Te pasaste";
    }
}