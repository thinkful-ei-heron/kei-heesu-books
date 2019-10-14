import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import BookSearch from '../Component/BookSearch';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      expandedView: false,
      filter: null,
      error: null
    }
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=mistborn';
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(response => {
        if(!response.ok) {
          throw new Error('bad');
        }
        return response;
      })
      .then (response => response.json())
      .then(data => {
        this.setState({
          books: data.items,
          expandedView: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  //update expandedView 
  setExpandedView(expanded) {
    this.setState({
      expandedView: expanded
    })
  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        <Header />
        <BookSearch />
        <BookFilter />
        {this.state.books.length > 0 && <BookList books={this.state.books} />}
      </div>
    )
  } 
}

export default App;
