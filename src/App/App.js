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
  }
  
  addReservation = (name, date, time, number, event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      time: time,
      name: name,
      date: date, 
      number: number,
    }
    console.log(newReservation)
    this.setState({reservations: [...this.state.reservations, newReservation]})

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
