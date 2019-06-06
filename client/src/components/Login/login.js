import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'
import Style from '../Style'
import Logo from '../../Assets/Logo.png'



class Login extends Component {
  render() {
    const { isSignedIn, uiConfig } = this.props
    return (
      <div>
      <div style={{marginTop: '80px', textAlign: 'center'}}>
       <img alt="logo" src={Logo}/>

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
      </div>
<Style />

      </div>
    )
  }
}

export default Login