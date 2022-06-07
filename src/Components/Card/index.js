import { Component } from "react";
import CardStyle from "./card.module.css";

export class Card extends Component {
  render() {
    let { type, name, base_experience, id } = this.props.card;
    return (
      <div className={`card ${CardStyle.card_class}`}>
        <h5 className={`${CardStyle.card_pokemon}`}>{name}</h5>
        <div className="card-body">
          <img
            className={`${CardStyle.card_img}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
          <p>Type: {type}</p>
          <p>EPX: {base_experience}</p>
        </div>
      </div>
    );
  }
}
