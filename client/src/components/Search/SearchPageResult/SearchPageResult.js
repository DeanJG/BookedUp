import React, { Component } from 'react'
import TopNavi from './TopNavi'
import SearchBar from './SearchBar'
import BookSearchResult from './BookSearchResult'
import Navbar from '../../Navbar'
import ClubSearch from './ClubSearch'




export default class Search extends Component {
    render () {
        return (
            // Search Results
            <div style={{marginTop: '65px', marginBottom: '85px'}}>
            <TopNavi />
            <SearchBar />
            <p style={{margin: '20px'}}><b style={{color: '#5B4FED'}}>Book(s)</b> Matching For "   "</p>
           <BookSearchResult />
           <BookSearchResult />
           <br />
           <hr />
           <p style={{margin: '20px'}}><b style={{color: '#5B4FED'}}>Club(s)</b> Matching For "   "</p>
            <ClubSearch />
            <ClubSearch />
            <ClubSearch />
            <ClubSearch />
            <ClubSearch />

            <Navbar />
            </div>


        )
    }
}
