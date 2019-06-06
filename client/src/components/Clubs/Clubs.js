import React, { Component } from 'react'
import CardDropDown from './CardDropDown';
import TopNavi from './TopNavi'




export default class Clubs extends Component {
    render () {
        return (
            <>
            <div style={{marginTop: '70px', marginBottom: '85px'}}>

            <TopNavi />

            <CardDropDown />
            </div>

            </>
        )
    }
}
