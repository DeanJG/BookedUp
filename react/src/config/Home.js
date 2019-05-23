import React from 'react';
import fire from './Fire.js'

class Home extends React.Component {
    logout() {
        
    }


    render() {
        return (
            <div>
                <h4>You are logged in!</h4>
                <button onClick={this.UNSAFE_componentWillMount.logout}>Logout</button>
            </div>
        )
    }
}
export default home;