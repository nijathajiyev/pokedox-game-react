import { Component } from "react";
import { Card } from "../Card";

export class Pokemon extends Component {
  render() {
    let { data } = this.props;

    return (
      <div>
        <div className="d-flex justify-content-center">
          {data.map((card, index) => (
            <Card key={`card-${index}`} card={card} />
          ))}
        </div>
      </div>
    );
  }
}
