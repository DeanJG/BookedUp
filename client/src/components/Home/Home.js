import React, { Component } from 'react'
import TopNavi from './TopNavi'
import Cards from './Cards'
import NavBar from '../Navbar'


export default class Home extends Component {
    render () {
        return (
            <div style={{marginTop: '85px', marginBottom: '85px'}}>
                <TopNavi />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <NavBar />



            </div>
        )
    }
}


