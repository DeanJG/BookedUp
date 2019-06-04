import React, { Component } from 'react'
import SearchTopNavi from './SearchTopNavi'
import Navbar from '../../Navbar'
import IndiBookHero from './IndiBookHero'
import BookRating from './BookRating'




export default class Search extends Component {
    render () {
        return (
        // Individual Book Pages

        <div style={{marginTop: '55px', marginBottom: '70px'}}>
        <SearchTopNavi />
        <IndiBookHero />
        <BookRating />

        <Navbar />

        </div>

        )
    }
}


