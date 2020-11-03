import { Switch, Route, Link } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import OtherPokemon from './components/OtherPokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="menu">
        <li><Link to="/">Blastoise</Link></li>
        <li><Link to="/otherpokemon">Other Pokemon</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Pokemon} />
        <Route path="/otherpokemon" component={OtherPokemon} />
      </Switch>
    </div>
  );
}

export default App;
