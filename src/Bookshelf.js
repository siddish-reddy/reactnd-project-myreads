import React from 'react'
import Book from './Book'
import './App.css'

class Bookshelf extends React.Component {
    render() {
        return ( 
            <div className = "bookshelf" >
                <h2 className = "bookshelf-title" >{this.props.name} </h2> 
                <div className = "bookshelf-books" >
                    <ol className="books-grid">
                        {this.props.books.map(book=>(
                            <li key={book.id}><Book book = {book} handleShelfChange = {this.props.handleShelfChange}/></li>
                        ))}
                    </ol> 
                </div> 
            </div>
        )
    }
}

export default Bookshelf