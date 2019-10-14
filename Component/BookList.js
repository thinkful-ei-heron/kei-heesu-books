import React from 'react';
import '.BookList.css';

class BookList extends React.Component {
    render() {
        return (
            <div className='bookList-Container'>
                <img src='#' alt='bookThunbnail' />
                <ul>
                    <li className='bookTitle'>Title</li>
                    <li>Author</li>
                    <li>Describtion</li>
                </ul>
            </div>
        )
    }
};

export default BookList;