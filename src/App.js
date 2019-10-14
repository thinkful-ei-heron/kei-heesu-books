import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import BookSearch from './Component/BookSearch';
import Header from './Component/Header';
import BookFilter from './Component/BookFilter';


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
      bookType: '',
      printType: 'all',
      error: null,
      search: ''
    }
  }

  handleBookType = (bookType) => {
    this.setState(
        {
            bookType
        },
        this.update
    );
  }

  handlePrintType = (printType) => {
    this.setState(
        {
            printType
        },
        this.update
    );
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState(
      {
        search: e.target.value
      }
    )
  }

  handleSubmit = (e) => {
    console.log('handlesubmit')
    e.preventDefault();
    this.update();
  }

  //update expandedView 
  setExpandedView(expanded) {
    this.setState({
      expandedView: expanded
    })
  }

  update = () => {
    let url=`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`;
    if(this.state.printType.length > 0) {
      url= url + '&printType=' + this.state.printType;
      console.log('inside if statement for printType ' + url + ', ' + this.state.printType)
    } 
    if(this.state.bookType.length > 0) {
      url= url + '&filter=' + this.state.bookType;
      console.log('inside if statement for bookType ' + url + ', ' + this.state.bookType)
    }
    
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(response => {
        console.log('fetch')
        console.log(url)
        if(!response.ok) {
          throw new Error('bad');
        }
        return response;
      })
      .then (response => response.json())
      .then(data => {
        console.log('updating state of books array')
        if (data.totalItems > 0) {
          this.setState({
            books: data.items,
            expandedView: false,
          });
        } else {
          this.setState({
            books: []
          })
        }
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
        {console.log('running render()')}
        <Header />
        <BookSearch state={this.state} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
        <BookFilter state={this.state} handleBookType={this.handleBookType} handlePrintType={this.handlePrintType} />
        {this.state.books.length > 0 ? <BookList books={this.state.books} /> : <p>There are no results.</p>}
      </div>
    )
  } 
}

export default App;
