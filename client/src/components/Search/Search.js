import React, { Component } from 'react'
import SearchTopNavi from './SearchTopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'



export default class Search extends Component {
    render () {
        return (
            <>
            <SearchTopNavi />
            <SearchBar />
            <Spotlight />


            <h1>hit it wit dem young search pages</h1>
            </>
        )
    }
}


