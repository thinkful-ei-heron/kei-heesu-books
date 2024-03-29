import React, { Component } from 'react';
import Author from './Author';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedView: false,
    }
  }

  setExpandedView(expanded) {
    this.setState({
      expandedView: expanded
    })
  }

  render() {
    return (
      <div className="book" onClick={e => this.setExpandedView(!this.state.expandedView)}>
        <img className="book-thumbnail" src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="cover"/>
        <h2 className="book-title">{this.props.book.volumeInfo.title}</h2>
        <Author authors={this.props.book.volumeInfo.authors} />
        {this.props.book.saleInfo.listPrice !== undefined ? <p className="book-price">Price: {this.props.book.saleInfo.listPrice.amount}</p> : <p>Not For Sale</p>}
        {this.props.book.searchInfo !== undefined ? <p className="book-desc"> Text Snippet: {this.props.book.searchInfo.textSnippet} </p> : <p>There is no text snippet available for this book. </p>}
        {this.state.expandedView ? <p>Expanded Description: {this.props.book.volumeInfo.description}</p> : <p></p>}
        <hr></hr>
      </div>
    );
  }
}

export default Book;