import React, { Component } from 'react'
import Home from './components/Home'
import Clubs from './components/Clubs'
import Profile from './components/Profile'
import Search from './components/Search'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom' 
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

  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/components/login.js',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
}

// class App extends Component {
//   state = {
//     Users: [],
//     item: ``,
//     isSignedIn: false
//   }

  // getUsers = _ => {
  //   db.collection(`Users`).get()
  //   .then(snap => {
  //     let tempUsers = []
  //     snap.forEach(doc => {
  //       tempUsers.push(doc.data())
  //     })
  //     this.setState({ Users: tempUsers })
  //   })

  // }

class App extends Component {
  getBooks = () => {
    console.log('hi nina')
    //axios.get('/books)
    fetch('/books')
      .then(r => r.json())
      .then(books => console.log(books))
        .catch(e => console.log(e))
  }

  render() {
    return (
      <>
      <Router>
        <div>
            <Navbar />
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/clubs' component={Clubs} />
              <Route path='/profile' component={Profile} />
            </Switch>
        </div>
      </Router>

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
      </>
    )
  }
}

export default App
