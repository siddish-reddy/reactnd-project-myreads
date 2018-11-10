import React from 'react'

class Book extends React.Component{
    render() {
        if( this.props.book){
            const book = this.props.book
            return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={e => { this.props.handleShelfChange(book, e.target.value)}} value={book.shelf} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        {/*Forms reference: https://reactjs.org/docs/forms.html */ }
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            )
        }
    }
}

export default Book