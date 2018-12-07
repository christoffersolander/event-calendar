import React from "react";
import DB from "../db";
import Event from "../models/Event";

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.db = new DB();

    this.state = {
      title: "",
      description: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddEvent = event => {
    event.preventDefault();
    let event_element = new Event(this.state.title, this.state.description);

    this.db.addEvent(event_element).then(docRef => {
      event_element.id = docRef.id;

      this.props.handleUpdateEventList(event_element);

      this.setState({
        title: "",
        description: ""
      });
    });
  };

  render() {
    return (
      <div id="formCon" className="alert alert-secondary">
        <form onSubmit={this.handleAddEvent}>
          <div className="form-group">
            <label>Title:</label>
            <input
              name="title"
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <input className="btn btn-success" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
