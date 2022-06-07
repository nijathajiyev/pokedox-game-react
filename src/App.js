import { Component } from "react";
import "./App.css";
import { Pokemon } from "./Components/Pokemon";
import data from "./Constant/data.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.pokemon,
      btnValue: "Start Game",
      team1: [],
      team2: [],
      winner: false,
    };
  }

  startGame() {
    let randomTeam1 = [];
    let randomTeam2 = [...this.state.data];

    while (randomTeam1.length < randomTeam2.length) {
      let randomCard = Math.floor(Math.random() * randomTeam2.length);

      let randomDeleteCard = randomTeam2.splice(randomCard, 1)[0];

      randomTeam1 = [...randomTeam1, randomDeleteCard];
    }
    this.setState({
      team1: randomTeam1,
      team2: randomTeam2,
      btnValue: "New Game",
      winner: true,
    });
  }

  render() {
    let team1Point = this.state.team1.reduce(
      (sum, card) => sum + card.base_experience,
      0
    );
    let team2Point = this.state.team2.reduce(
      (sum, card) => sum + card.base_experience,
      0
    );
    return (
      <div className="App">
        <br />
        <Pokemon data={this.state.team1} win={team1Point > team2Point} />
        <br />
        {this.state.winner && <h5>Total Experience: {team1Point}</h5>}
        <br />
        {this.state.winner && (
          <h1>{team1Point > team2Point ? "Win" : "Lost"}</h1>
        )}

        {this.state.winner ? "" : <h1>Pokedox Game</h1>}
        <br />
        <button className="btn-class" onClick={() => this.startGame()}>
          {this.state.btnValue}
        </button>
        <br />
        <br />
        {this.state.winner && (
          <h1>{team1Point < team2Point ? "Win" : "Lost"}</h1>
        )}
        <br />
        {this.state.winner && <h5>Total Experience: {team2Point}</h5>}

        <Pokemon data={this.state.team2} win={team2Point > team1Point} />
      </div>
    );
  }
}

export default App;
