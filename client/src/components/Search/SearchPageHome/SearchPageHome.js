import React, { Component } from 'react'
import TopNavi from './TopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import Navbar from '../../Navbar'
import NewlyAddedClubs from './NewlyAddedClubs';
import PopularBooks from '../PopularBooks';



export default class Search extends Component {
    render () {
        return (

            <div style={{marginTop: '65px', marginBottom: '85px'}}>
            <TopNavi />
            <SearchBar />
            <Spotlight />
            <Navbar />
            <NewlyAddedClubs/>
            <PopularBooks/>

            </div>

        )
    }
}


