import React from 'react';
import './BookSearch.css';

class BookSearch extends React.Component {
    render() {
        return (
            <form className='bookSearch' onSubmit={e=>this.props.handleSubmit(e)}>
                <label htmlFor='searchBook'>Search: </label>
                <input id='searchBook' placeholder='Book Title' ref='searchBook' name='searchBook' type='text' onChange={this.props.handleSearch}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
};

export default BookSearch;
