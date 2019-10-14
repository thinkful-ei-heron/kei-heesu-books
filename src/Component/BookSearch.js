import React from 'react';
import './BookSearch.css';

class BookSearch extends React.Component {
    render() {
        return (
            <form className='bookSearch'>
                <label htmlFor='searchBook'>Search: </label>
                <input id='searchBook' placeholder='Book Title' name='searchBook' type='text' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
};

export default BookSearch;
