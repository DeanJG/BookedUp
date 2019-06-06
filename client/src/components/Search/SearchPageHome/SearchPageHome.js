import React, { Component } from 'react'
import TopNavi from './TopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import Navbar from '../../Navbar'



export default class Search extends Component {

    state = {
        book: {}
    }

    getBookInfo = (title) => {
        console.log('this is the title:', title)
        fetch(`/books/${title}`)
          .then(r => r.json())
          .then(book => this.setState({  book }))
          .catch(e => console.log(e))
      }
    render () {
        const {getBookInfo} = this.props
        console.log('props', this.props)
        console.log('state', this.state)
        return (
            <div>
                <div style={{marginTop: '65px', marginBottom: '85px'}}></div>
                <TopNavi />
                <SearchBar />
                <div style={{marginTop: '55px', marginBottom: '55px'}}>
                    <SearchBar getBookInfo={this.getBookInfo} />
                    <Spotlight />
                    <Navbar />
                </div>
            </div>
        )
    }

}


