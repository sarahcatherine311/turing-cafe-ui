import React, { Component } from 'react';
import './App.css';
import fetchData from '../ApiCalls';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  
  componentDidMount() {
    fetchData()
    .then(data => this.setState({reservations: data}))
    .catch(error => console.log(error))
  }
  
  postReservation = (newReservation) => {
    return fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({reservations: [...this.state.reservations, data]}))
    .catch(error => console.log(error))
  }

  addReservation = (name, date, time, number, event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      time: time,
      name: name,
      date: date, 
      number: parseInt(number),
    }
    this.postReservation(newReservation)
    this.clearInputs()
  }

  deleteReservation = (id) => {
    const newReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    console.log(newReservations, id)
    this.setState({
      reservations: newReservations
    })

  }

  clearInputs = () => {
    document.getElementById("nameInput").value = ""
    document.getElementById("dateInput").value = ""
    document.getElementById("timeInput").value = ""
    document.getElementById("numberInput").value = ""
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
