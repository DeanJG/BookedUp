// import React, { Component } from 'react'
// import fire from './fire'

// class Login extends React.Component {

//     login() {

//     }

//     Signup() {

//     }


//     render() {
//         return (
//             <div>
//             <div style={{ textAlign: 'center' }}>
//                 <div>Email</div>
//                 <input id="Email" placeholder="Please Enter Email." type="text"></input>
//             </div>
//             <div>
//                 <div>
                    
//                     <div>Password</div>
//                     <input id="password" placeholder="Please Enter Password." type="text"></input>
//                 </div>
//                 <button style={{ margin: '12px' }} onClick={this.login}>Login</button>
//                 <button style={{ margin: '12px' }} onClick={this.Password}>Password</button>
//             </div>
//             </div>
//         )
//     }
// }
// export default Login;
import React, { Component } from 'react'
import './App.css'

class login extends Component {
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
          </div>
        </div>
      </div>

    )
  }
}

export default login