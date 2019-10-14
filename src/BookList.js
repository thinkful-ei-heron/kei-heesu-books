import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class BookList extends Component {
  render() {
    console.log(this.props.books[0])
    const books = this.props.books.map((element, index) => 
      <Book key={index} book={element}/>);
    return (
      <div className="book">
        {books}
      </div>
    );
  }
}

export default BookList;