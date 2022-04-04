import React, { Component } from 'react';
import './Game.css';
import List from './List';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100),
            tries: [],
            numTries: 1,
        }
    }

    handleOnChange = e => {
        const {target: {value}} = e;
        if(value >= 0) {
            this.setState({number: value});
        }
    }

    handleOnSubmit = e => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);

        this.setState({
            tries: [
                ...this.state.tries,
                this.state.number,
            ],
            numTries: this.state.numTries + 1,
        })

        var text = calculateText(number, random);

        if(text === "Felicidades acertaste") {
            document.getElementById('1d').style.border = "5px solid green";
            text += " en " + this.state.numTries + " intentos"
        }

        this.setState({
            message: text,
            number: "",
        })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="Game">
                    <p className="txt">Adivina el numero del 1 - 100</p>
                    <input 
                        type="number"
                        className= "num"
                        id = '1d'
                        value={this.state.number}
                        onChange = {this.handleOnChange}
                    />
                        <p></p>
                        <input type="submit" className = "btn"/>
                        <p className= "txt">{this.state.message}</p>
                    </div>
                </form>
                <List tries = {this.state.tries} />
            </div>
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
            return "" + number + " se queda corto, pero estas cerca";
        }
        else
            return "" + number + " se queda corto";
    }
    else {
        if(number - random < 10) {
            return "" + number + " se pasa, pero estas cerca";
        }
        else
            return "" + number + " se pasa";
    }
}