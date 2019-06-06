import React, { Component } from 'react'
import Header from './Header';
import Buttons from './Buttons';
import Hosting from './Hosting';
import BookClub from './BookClub';
import Favorites from './Favorites';

export default class Profile extends Component {
    render () {
        return (
            <>
            <Header/>
            <Buttons/>
            <Hosting/>
            <BookClub/>
            <Favorites/>
            </>
        )
    }
}
