import React, { Component } from 'react'
import Header from './Header';
import Buttons from './Buttons';
import Hosting from './Hosting';
import BookClub from './BookClub';
import Favorites from './Favorites';
import TopNavi from './TopNavi';


export default class Profile extends Component {
    render () {
        return (
            
            <div style={{marginTop: '65px', marginBottom: '85px'}}>

            <TopNavi/>
            <Header/>
            <Buttons/>
            <Hosting/>
            <BookClub/>
            <Favorites/>
            </div>
        )
    }
}
