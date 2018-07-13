import React from "react";
import EventElemet from "./EventElement";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventElemets: props.records
    };
  }

  handleDeleteEvent(id) {
    console.log("handle");
  }

  render() {
    return this.state.eventElemets.map(record => {
      return (
        <EventElemet
          key={record.id}
          id={record}
          title={record.title}
          onclickDeletEvent={this.handleDeleteEvent}
        />
      );
    });
  }
}
