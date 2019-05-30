import React, { Component } from 'react'
import './App.css'
import firebase from 'firebase'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC9NWKKTfx1jpU4V3uLb9n1GEs5lhUC0rY",
    authDomain: "booked-up.firebaseapp.com",
    databaseURL: "https://booked-up.firebaseio.com",
    projectId: "booked-up",
    storageBucket: "booked-up.appspot.com",
    messagingSenderId: "760422446689",
    appId: "1:760422446689:web:c144ce52486f0369"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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
