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
        console.log(value);
        if(value > 0) {
            this.setState({number: value});
        }
    }

    handleOnClick = () => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);

        const text = calculateText(number, random);

        this.setState({
            message: text
        })
    }

    render() {
        console.log(this.state.random);
        return (
            <div className="Game">
                <input 
                    type="number"
                    value={this.state.number}
                    onChange = {this.handleOnChange}
                />

                <button onclick = {this.handleOnClick}>Probar</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random() *(max - min) + min);
}

function calculateText(number, random) {
    if(number === random) {
        return "Felicidades acertaste";
    }
}