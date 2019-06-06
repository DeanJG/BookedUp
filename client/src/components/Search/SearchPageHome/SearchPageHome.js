import React, { Component } from 'react'
import TopNavi from './TopNavi'
import SearchBar from './SearchBar'
import Spotlight from './Spotlight'
import Navbar from '../../Navbar'
import NewlyAddedClubs from './NewlyAddedClubs';
import PopularBooks from '../PopularBooks';

export default class Search extends Component {
    // creating our state book with an empty array, to pass into our function 
    state = {
        book: {
            title: '',
            author: '',
            synopsis: '',
            cover: ''
        },
        results: {
            clubs: [],
            suggestedReads: []
        }
    }

    getBookInfo = (title) => {
        console.log('this is the title:', title)
        fetch(`/books/${title}`)
          .then(r => r.json())
          // with our then function we pass the state book 
          .then(book => {
              this.setState({ book })
            })
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
                <div style={{marginTop: '55px', marginBottom: '55px'}}>
                    <SearchBar getBookInfo={this.getBookInfo} />
                    <Spotlight 
                        title={this.state.book.title} 
                        author={this.state.book.author} 
                        cover={this.state.book.cover} 
                        synopsis={this.state.book.synopsis}
                    />
                    <Navbar />
                    <NewlyAddedClubs/>
                    <PopularBooks/>
                </div>
            </div>
        )
    }

}


