import React, { Component } from 'react'
import TopNavi from './TopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import Navbar from '../../Navbar'
import Recommend from './Favorites'
import RecommendClubs from './BookClub'





export default class Search extends Component {
    render () {
        return (

            <div style={{marginTop: '65px', marginBottom:'40px'}}>
            <TopNavi />
            <SearchBar />
            <Spotlight />
            <Navbar />
            <Recommend />
            <RecommendClubs />

            </div>

        )
    }
}


