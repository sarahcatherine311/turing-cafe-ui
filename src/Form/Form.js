import { Component } from "react";
import React from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: 0
    }
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Date (mm/dd)"/>
        <input type="text" placeholder="Time"/>
        <input type="number" placeholder="Number of guests"/>
      </form>
    )
  }
}

export default Form