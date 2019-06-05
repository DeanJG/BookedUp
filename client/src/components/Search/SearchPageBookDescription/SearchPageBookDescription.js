import React, { Component } from 'react'
import TopNavi from './TopNavi'
import Navbar from '../../Navbar'
import IndiBookHero from './IndiBookHero'
import BookRating from './BookRating'





export default class Search extends Component {
    render () {
        return (
        // Individual Book Pages

        <div style={{marginTop: '55px', marginBottom: '85px'}}>
        <TopNavi />
        <IndiBookHero />
        <BookRating />

        <Navbar />

        </div>

        )
    }
}


