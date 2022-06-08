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
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
              id < 10 ? "00" + id : id > 10 && id < 100 ? "0" + id : id
            }.png`}
          />
          <p>Type: {type}</p>
          <p>EPX: {base_experience}</p>
        </div>
      </div>
    );
  }
}
