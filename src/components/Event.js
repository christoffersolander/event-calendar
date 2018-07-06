import React from 'react'

export default class Event extends React.Component {

  constructor() {
    super();
    this.title = 'My element';
  }

  render() {
    return (
      <div>{this.title}</div>
    )
  }
}
