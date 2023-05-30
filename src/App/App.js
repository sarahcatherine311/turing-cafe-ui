import React, { Component } from 'react';
import './App.css';
import fetchData from '../ApiCalls';

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
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations />
        </div>
      </div>
    )
  }
}

export default App;
