import React from "react";
import DB from "../db";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.db = new DB();

    this.state = {
      events: props.events
    };
  }

  onDeleteElement = event => {
    const state_index = event.target.getAttribute("data-index");
    const event_id = event.target.getAttribute("data-event-id");

    this.db.deleteEvent(event_id).then(() => {
      let events = this.state.events;
      events.splice(state_index, 1);

      this.setState({ events });
    });
  };

  Element = props => {
    return (
      <div className="card" key={props.event.id}>
        <div className="card-body">
          <details>
            <summary>
              <h3>{props.event.title}</h3>
            </summary>
            <p>{props.event.description}</p>
          </details>
          <footer>
            <button
              className="btn btn-danger deleteCard "
              data-index={props.index}
              data-event-id={props.event.id}
              onClick={this.onDeleteElement}
            >
              x
            </button>
          </footer>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.events.map((event, index) => (
          <div key={event.id}>
            <this.Element event={event} index={index} />
          </div>
        ))}
      </div>
    );
  }
}
