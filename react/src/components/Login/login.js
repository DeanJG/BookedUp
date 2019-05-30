
import React, { Component } from 'react'
import './App.css'
import fire from './Fire'

class Login extends Component {

  login() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
      console.log("You are Logged In!")
    })
      .catch((err) => {
        console.log(Error)
      })

  }

  Signup() {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
      console.log("You are Now Signed UP!")
    })
      .catch((err) => {
        console.log(Error)
      })

  }


  render() {
    return (
      <div>
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
          </div>
        </div>
      </div>

    )
  }
}

export default Login