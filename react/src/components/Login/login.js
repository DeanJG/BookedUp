import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'


class Login extends Component {
  render() {
    const { IsSignedIn, uiConfig } = this.props
    return (
      <div className="Login">
        {IsSignedIn ?
          <div>You are signed In!</div>
          :
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        }
      </div>
    )
  }
}

export default Login