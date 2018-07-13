import React from "react";
import ReactDOM from "react-dom";
import EventList from "./myComponents/EventList";
import PropTypes from "prop-types";

import "./styles.css";

const records = [
  {
    id: 1,
    title: "Go play with the boys"
  },
  {
    id: 2,
    title: "Visit sister"
  },
  {
    id: 3,
    title: "Code that shit"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.records = props.records;
  }

  render() {
    return (
      <div>
        <h1>The app I am!</h1>
        <EventList records={this.records} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App records={records} />, rootElement);
