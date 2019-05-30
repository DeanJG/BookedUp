import React, { Component } from 'react'
import './App.css'

class App extends Component {
  getBooks = () => {
    console.log('hi nina')
    fetch('http://localhost:4000/books')
      .then(r => r.json())
      .then(books => console.log(books))
        .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <div>Email</div>
          <input id="Email" placeholder="Please Enter Email." type="text"></input>
        </div>
        <div>
          <div>
            <div style={{ textAlign: 'center' }}>
              <div>Password</div>
              <input id="password" placeholder="Please Enter Password." type="text"></input>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button style={{ margin: '12px' }} onClick={this.login}>Login</button>
            <button style={{ margin: '12px' }} onClick={this.Signup}>Signup</button>
            <button style={{ margin: '12px' }} onClick={this.getBooks}>Books</button>
          </div>
        </div>
      </div>

    )
  }
}

export default App
