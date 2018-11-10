import React from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf';

class MyReads extends React.Component{
    
    render(){
        console.log(this.props.books)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                {this.props.books && 
                    <div className="list-books-content">
                        <Bookshelf 
                            name='Currently Reading'
                            books = {this.props.books.filter((book) => (book.shelf === "currentlyReading"))}
                            handleShelfChange = {this.props.handleShelfChange}
                        />
                        <Bookshelf 
                            name='Want to Read'
                            books = {this.props.books.filter((book) => (book.shelf === "wantToRead"))}
                            handleShelfChange={this.props.handleShelfChange}
                        />
                        <Bookshelf 
                            name='Read'
                            books = {this.props.books.filter((book) => (book.shelf === "read"))}
                            handleShelfChange = {this.props.handleShelfChange}
                        />
                    </div>
                }
                <div className="open-search">
                            <Link to = '/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MyReads