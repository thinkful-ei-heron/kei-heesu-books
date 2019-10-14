import React, { Component } from 'react';

class Author extends Component {
  render() {
    let authors; 
      if (this.props.authors !== undefined) { 
        authors = this.props.authors.join(', '); 
      } else { 
        authors = "None Listed" 
      };

    return (
      <p className="book">
        Author(s): {authors}
      </p>
    );
  }
}

export default Author;