import React, { Component } from 'react'
import TopNavi from './TopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import Navbar from '../../Navbar'



export default class Search extends Component {
    render () {
        return (

            <div style={{marginTop: '65px', marginBottom: '85px'}}>
            <TopNavi />
            <SearchBar />
            <Spotlight />
            <Navbar />

            </div>

        )
    }
}


