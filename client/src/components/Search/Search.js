import React, { Component } from 'react'
import SearchTopNavi from './SearchTopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import BookSearchResult from './BookSearchResult'
import Navbar from '../Navbar'
import ClubSearch from './ClubSearch'
import IndiBookHero from './IndiBookHero'
import BookRating from './BookRating'




export default class Search extends Component {
    render () {
        return (

            // Main Page
            <div style={{marginTop: '55px', marginBottom: '55px'}}>
            <SearchTopNavi />
            <SearchBar />
            <Spotlight />
            <Navbar />

            </div>



            // Search Results
        //     <div style={{marginTop: '55px', marginBottom: '55px'}}>
        //     <SearchTopNavi />
        //     <SearchBar />
        //     {/* <Spotlight /> */}
        //     <p style={{margin: '20px'}}><b style={{color: '#5B4FED'}}>Book(s)</b> Matching For "   "</p>
        //    <BookSearchResult />
        //    <BookSearchResult />
        //    <br />
        //    <hr />
        //    <p style={{margin: '20px'}}><b style={{color: '#5B4FED'}}>Club(s)</b> Matching For "   "</p>
        //     <ClubSearch />
        //     <ClubSearch />
        //     <ClubSearch />
        //     <ClubSearch />
        //     <ClubSearch />

        //     <Navbar />
        //     </div>


        // Individual Book Pages

        // <div style={{marginTop: '55px', marginBottom: '70px'}}>
        // <SearchTopNavi />
        // <IndiBookHero />
        // <BookRating />

        // <Navbar />

        // </div>

        )
    }
}


