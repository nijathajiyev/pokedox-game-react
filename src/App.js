import { Component } from "react";
import "./App.css";
import PokemonGame from "./Components/PokemonGame";

class App extends Component {

  render() {
    return (
      <div className="App">
        <PokemonGame/>
      </div>
    );
  }
}

export default App;
