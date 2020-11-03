import { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
    state = {
        pokemon: '',
    }

    getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/9")
        .then(res => res.json())
        .then(res => this.setState({ pokemon: res}))
    }

    componentDidMount() {
        this.getPokemons()
    }

    render() {
        return(
            <div className="container">
                <h1>Gotta catch em all !</h1>
                <div>
                    <p>{this.state.pokemon.name} is my favorite pokemon ever !</p>
                    <img src="https://i.pinimg.com/originals/0a/cc/dd/0accddf704f0018ba76d835a5f9df9de.png" alt="blastoise"/>
                </div>
            </div>
        )
    }
}

export default Pokemon;