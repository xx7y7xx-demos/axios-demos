import React, { Component } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  handleGoogle404 = () => {
    axios
      .get('https://google.com/user?id=123')
      .then(function(response) {
        console.log('then()', response)
      })
      .catch(function(error) {
        console.log('catch()', 'error', error)
        console.log('catch()', 'error.message', error.message)
        console.log('catch()', 'error.status', error.status)
        console.log('catch()', 'error.code', error.code)
      })
  }

  createHandler = statusCode => () =>
    axios
      .get(`https://httpstat.us/${statusCode}`)
      .then(function(response) {
        console.log('then()', response)
      })
      .catch(function(error) {
        console.log('catch()', 'error', error)
        console.log('catch()', 'error.message', error.message)
        console.log('catch()', 'error.status', error.status)
        console.log('catch()', 'error.code', error.code)
      })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">View the console to find the detail error.</p>
        <button onClick={this.handleGoogle404}>
          GET https://google.com/user?id=123 || 404 Error
        </button>
        <br />
        <button onClick={this.createHandler(404)}>
          GET https://httpstat.us/404 || 404 Error
        </button>
        <br />
        <button onClick={this.createHandler(500)}>
          GET https://httpstat.us/500 || 500 Error
        </button>
      </div>
    )
  }
}

export default App
