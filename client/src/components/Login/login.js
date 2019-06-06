import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'


class Login extends Component {
  render() {
    const { isSignedIn, uiConfig } = this.props
    return (
      <div className="Login">
        {isSignedIn ? (
          <Button color='secondary' onClick={() => firebase.auth().signOut()}>
            Sign Out..
          </Button>
        )
          :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        }
      </div>
    )
  }
}

export default Login