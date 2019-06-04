import React, { Component } from 'react'
import Home from './components/Home'
import Clubs from './components/Clubs'
import Profile from './components/Profile'
import Search from './components/Search/SearchPageBookDescription'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import firebase from 'firebase'
import Login from './components/Login'

const config = {
  apiKey: "AIzaSyC9NWKKTfx1jpU4V3uLb9n1GEs5lhUC0rY",
  authDomain: "booked-up.firebaseapp.com",
  databaseURL: "https://booked-up.firebaseio.com",
  projectId: "booked-up",
  storageBucket: "booked-up.appspot.com",
  messagingSenderId: "760422446689",
  appId: "1:760422446689:web:c144ce52486f0369"
};
firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
 
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
}


class App extends Component {
  state = {
    isSignedIn: false
  }
  getBooks = () => {
    console.log('hi nina')
    //axios.get('/books)
    fetch('/books')
      .then(r => r.json())
      .then(books => console.log(books))
      .catch(e => console.log(e))
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    ))
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

    render() { 
      const { isSignedIn } = this.state
      return (
        <>
          <Router>
            <div>
              <nav>
                <Navbar 
                />
               
              </nav>
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/search' component={Search} />
                <Route path='/clubs' component={Clubs} />
                <Route path='/profile' component={Profile} />
              </Switch>
            </div>
            <div>
              <Route exact path='/login' component={() => <Login uiConfig={uiConfig} isSignedIn={isSignedIn} />} />
            </div>
          </Router>

          {/* <div>
            <div style={{ textAlign: 'center' }}>
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
          </div> */}
        </>
      )
    }
  }

  export default App
