import { Component } from "react";
import { Card } from "../Card";

export class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { data, win } = this.props;

    let title;
    if (win) {
      title = <h1>Winner</h1>;
    } else {
      title = <h1>Lost</h1>;
    }
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
