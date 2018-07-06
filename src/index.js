import React from "react";
import ReactDOM from "react-dom";
import EventList from "./components/EventList.js";

import "./styles.css";

const elements = [
  {
    title: "Go play with the boys"
  },
  {
    title: "Visit sister"
  }
];
console.log(elements);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>The app I am!</h1>
        <EventList />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
