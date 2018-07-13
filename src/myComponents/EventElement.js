import React from "react";

export default class EventElement extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }

  onclickDeleteEvent(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="card">
        <header>
          <h3>{this.title}</h3>
        </header>
        <footer>
          <button onClick={this.onclickDeleteEvent(this.props.id)}>x</button>
        </footer>
      </div>
    );
  }
}
