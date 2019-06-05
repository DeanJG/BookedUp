import React, { Component } from 'react'
import TopNavi from './TopNavi'
import IndiClubHero from './IndiClubHero'
import Cards from './Host'
import Members from './Members'
import InformationCard from './InformationCard'








export default class Home extends Component {
    render () {
        return (
            <div style={{marginTop: '55px', marginBottom: '85px'}}>
            <TopNavi />
              <IndiClubHero />
              <InformationCard />
              <Cards />
              <Members />


            </div>
        )
    }
}