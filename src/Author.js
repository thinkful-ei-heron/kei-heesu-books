import React, { Component } from 'react';

class Author extends Component {
  render() {
    const authors = this.props.authors.join(', ');
    return (
      <p className="book">
        Author(s): {authors}
      </p>
    );
  }
}

export default Author;