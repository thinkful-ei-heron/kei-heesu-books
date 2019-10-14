import React, { Component } from 'react';
import './App.css';
import BookList from './Component/BookList';
import BookSearch from './Component/BookSearch';
import Header from './Component/Header';
import BookFilter from './Component/BookFilter'


// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      expandedView: false,
      bookType: null,
      printType: null,
      error: null,
      search: null
    }
  }

  handleBookType = (bookType) => {
    this.setState(
        {
            bookType
        }
    );
  }

  handlePrintType = (printType) => {
    this.setState(
        {
            printType
        }
    );
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState(
      {
        search: e.target.value
      }
    )
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`;
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

  update = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`;
    console.log(url)
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

  render() {
    return (
      <div>
        <Header />
        <BookSearch state={this.state} handleSearch={this.handleSearch}/>
        <BookFilter state={this.state} handleBookType={this.handleBookType} handlePrintType={this.handlePrintType}/>
        {this.state.books.length > 0 && <BookList books={this.state.books} />}
      </div>
    )
  } 
}

export default App;
