import React, { Component } from 'react'
import Home from './components/Home'
import Clubs from './components/Clubs'
import Profile from './components/Profile'
import Search from './components/Search'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom' 
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
      <>
      <Router>
        <div>
          <nav>
            <Link to='/home'>Home</Link><br/>
            <Link to='/search'>Search</Link><br/>
            <Link to='/clubs'>Clubs</Link><br/>
            <Link to='/profile'>Profile</Link><br/>
          </nav>
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
