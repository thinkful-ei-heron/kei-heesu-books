import React, { Component } from 'react';
import Author from './Author';

class Book extends Component {
  render() {
    console.log(this.props.book);
    return (
      <div className="book" onClick={e => this.props.setExpandedView}>
        <img className="book-thumbnail" src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="cover"/>
        <h2 className="book-title">{this.props.book.volumeInfo.title}</h2>
        <Author authors={this.props.book.volumeInfo.authors} />
        {this.props.book.saleInfo.saleability !== 'NOT_FOR_SALE' ? <p className="book-price">Price: {this.props.book.saleInfo.listPrice.amount}</p> : <p>Not For Sale</p>}
        <p className="book-desc">{this.props.book.searchInfo.textSnippet}</p>
      </div>
    );
  }
}

export default Book;