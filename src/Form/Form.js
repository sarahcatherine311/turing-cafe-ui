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

  resetState = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: 0
    })
  }

  handleSubmit = (event) => {
    this.props.addReservation(this.state.name, this.state.date, this.state.time, this.state.number, event)
    this.resetState()
  }

  render() {
    return (
      <form className="form" onSubmit={event => this.handleSubmit(event)}>
        <input id="nameInput" type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})}/>
        <input id="dateInput" type="text" placeholder="Date (mm/dd)" onChange={event => this.setState({date: event.target.value})}/>
        <input id="timeInput" type="text" placeholder="Time" onChange={event => this.setState({time: event.target.value})}/>
        <input id="numberInput" type="number" placeholder="Number of guests" onChange={event => this.setState({number: event.target.value})}/>
        <button type="submit">Make Reservaion</button>
      </form>
    )
  }
}

export default Form