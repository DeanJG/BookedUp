import React, { Component } from 'react'
import SearchTopNavi from './SearchTopNavi'
import SearchBar from './SearchBar'
import BookSearchResult from './BookSearchResult'
import Navbar from '../../Navbar'
import ClubSearch from './ClubSearch'




export default class Search extends Component {
    render () {
        return (
            // Search Results
            <div style={{marginTop: '55px', marginBottom: '55px'}}>
            <SearchTopNavi />
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
