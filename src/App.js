import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {update, getAll} from './BooksAPI'
import MyReads from './MyReads'
import Search from './Search'

class App extends React.Component {
    state ={
        books:[]
    }
    handleShelfChange = (book, shelf)=>{
        update(book, shelf).then(response =>{
            book.shelf = shelf
            this.setState(s=>({
                books : s.books.filter(b=>b.title!==book.title).concat(book)
            }))
        })
    }
    componentDidMount(){
        getAll()
        .then(books => {
            this.setState({books})
        })
        .catch(reason => console.log(reason))
    }
    render() {
        return (
            <div className='App'>
                <Route path = '/search' 
                    render={()=> <Search handleShelfChange = {this.handleShelfChange}/>}
                />
                <Route exact path='/'
                    render ={()=> <MyReads books = {this.state.books} handleShelfChange = {this.handleShelfChange}/>}
                />
            </div>
        )
    }
}

export default App