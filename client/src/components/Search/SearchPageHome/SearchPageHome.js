import React, { Component } from 'react'
import SearchTopNavi from './SearchTopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import Navbar from '../../Navbar'



export default class Search extends Component {
    render () {
        return (

            <div style={{marginTop: '55px', marginBottom: '55px'}}>
            <SearchTopNavi />
            <SearchBar />
            <Spotlight />
            <Navbar />

            </div>

        )
    }
}


