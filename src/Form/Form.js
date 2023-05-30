import { Component } from "react";
import React from "react";
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  clearInputs = () => {
    this.setState = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleSubmit = (event) => {
    this.props.addReservation(this.state.name, this.state.date, this.state.time, this.state.number, event)
    this.clearInputs()
  }

  render() {
    return (
      <form className="form" onSubmit={event => this.handleSubmit(event)}>
        <input type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})}/>
        <input type="text" placeholder="Date (mm/dd)" onChange={event => this.setState({date: event.target.value})}/>
        <input type="text" placeholder="Time" onChange={event => this.setState({time: event.target.value})}/>
        <input type="number" placeholder="Number of guests" onChange={event => this.setState({number: event.target.value})}/>
        <button type="submit">Make Reservaion</button>
      </form>
    )
  }
}

export default Form