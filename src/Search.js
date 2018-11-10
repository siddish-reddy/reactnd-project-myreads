import React from 'react'
import {search} from './BooksAPI'
import {Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component{

    state = {
        results:[],
        searchQuery : ''
    }

    
    handleInputChange = (event) =>{
        this.setState({
            searchQuery: event.target.value
        })
        search(this.state.searchQuery)
        .then(results=>{
            if(results){
                this.setState({results})
            }
            else this.setState({results:[]})
        })
    }

    render() {
        return (
            <div className="search-books">

                <div className="search-books-bar">
                    <Link to = '/' className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value = {this.state.searchQuery} onChange = {this.handleInputChange}/>
                    </div>
                </div>

                <div className="search-books-results">
                    {this.state.results && 
                        <ol className="books-grid">
                            {this.state.results.map  && this.state.results.map (book=>(
                                <li key={book.id}><Book book = {book} handleShelfChange={this.props.handleShelfChange}/></li>
                            ))}
                        </ol>
                    }
                </div>
          </div>
        )
    }
}

export default Search