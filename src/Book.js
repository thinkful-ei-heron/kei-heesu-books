import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <h2 className="book-title">{this.props.book.volumeInfo.title}</h2>
        <p className="book-author">Author: {this.props.book.volumeInfo.authors[0]}</p>
        {this.props.book.saleInfo.saleability !== 'NOT_FOR_SALE' ? <p className="book-price">Price: {this.props.book.saleInfo.listPrice.amount}</p> : <p>Not For Sale</p>}
        <p className="book-desc">{this.props.book.volumeInfo.description}</p>
        <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="cover"/>
      </div>
    );
  }
}

export default Book;