import React, { Component } from 'react'
import Header from './Header';
import Buttons from './Buttons';

export default class Profile extends Component {
    render () {
        return (
            <>
            <Header/>
            <Buttons/>
            
            <h1>This is the Profile page my dudes</h1>
            </>
        )
    }
}
