import React from "react";
import ReactDOM from "react-dom";
import EventList from "./myComponents/EventList";
import CreateForm from "./myComponents/CreateForm";

import DB from "./db";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.db = new DB();

    this.state = {
      show_form: false
    };

    this.getEvents();
  }

  getEvents = () => {
    this.db.listAllEvents().then(events => this.setState({ events }));
  };

  handleShowCreateForm = () => {
    this.state.show_form
      ? this.setState({ show_form: false })
      : this.setState({ show_form: true });
  };

  handleUpdateEventList = event => {
    let events = this.state.events;

    events.push(event);

    this.setState({
      events: events,
      show_form: false
    });
  };

  render() {
    return (
      <div>
        <h1>Remember that shit!</h1>
        <div id="addButton">
          <button
            className="btn btn-primary"
            onClick={this.handleShowCreateForm}
          >
            Add Event
          </button>
        </div>
        {this.state.show_form ? (
          <CreateForm handleUpdateEventList={this.handleUpdateEventList} />
        ) : (
          ""
        )}
        {this.state.events ? (
          <EventList events={this.state.events} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
