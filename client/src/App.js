import React, { Component } from 'react'
import Home from './components/Home'
import Clubs from './components/Clubs'
import Profile from './components/Profile'
import SearchResult from './components/Search/SearchPageResult'
import SearchedBook from './components/Search/SearchPageBookDescription'
import SearchedClub from './components/Search/SearchPageClubDescription'
import CreateClub from './components/Search/CreateBookClub'
import Search from './components/Search/SearchPageHome'
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
  signInSuccessUrl: '/',
 
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
}


class App extends Component {
  state = {
    isSignedIn: false
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    ))
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    )
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
              <Switch>
                <Route exact path='/' component={() => {
                  if (isSignedIn) {
                    return <Home />
                  } else {
                    return <Login uiConfig={uiConfig} isSignedIn={isSignedIn}/>
                  }
                }} />
                <Route path='/search' component={Search} />
                <Route path='/clubs' component={Clubs} />
                <Route path='/profile' component={Profile} />
                <Route path='/searchresult' component={SearchResult} />
                <Route path='/searchedbook' component={SearchedBook} />
                <Route path='/searchedclub' component={SearchedClub} />
                <Route path='/createClub' component={CreateClub} />
              </Switch>
            </div>
            <div>
              <Route exact path='/login' component={() => <Login uiConfig={uiConfig} isSignedIn={isSignedIn} />} />
            </div>
          </Router>

        </>
      )
    }
  }

  export default App
