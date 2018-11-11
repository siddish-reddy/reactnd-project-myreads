import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {update, getAll} from './BooksAPI'
import MyReads from './MyReads'
import Search from './Search'
import NoMatch from './404'
import './App.css'

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
            alert(book.title+ ' is added succesfully into "'+ shelf+'" shelf');
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
                <Switch>
                    <Route path = '/search' 
                            render={()=> <Search handleShelfChange = {this.handleShelfChange} booksInShelf = {this.state.books}/>}
                    />
                    <Route exact path='/'
                            render ={()=> <MyReads books = {this.state.books} handleShelfChange = {this.handleShelfChange}/>}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default App