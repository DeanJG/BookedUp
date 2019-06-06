import React, { Component } from 'react'
import CardDropDown from './CardDropDown';
import CardDropDown2 from './CardDropDown2';
import TopNavi from './TopNavi'
import Header from './Header'
import NavBar from '../Navbar';

export default class Clubs extends Component {

    render () {
        return (
            <>
            <div style={{marginTop: '70px', marginBottom: '85px'}}>

            <TopNavi />
            <Header />

            <CardDropDown2 />
            <CardDropDown />
            <NavBar />
            </div>

            </>
        )
    }
}
