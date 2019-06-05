import React, { Component } from 'react'
import TopNavi from './TopNavi'
import Card from './Card'
import Input from './input'






export default class Search extends Component {
    render () {
        return (
            // Search Results
            <div style={{marginTop: '65px', marginBottom: '85px'}}>
            <TopNavi />
            <Card />

            </div>


        )
    }
}
