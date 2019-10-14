import React from 'react';
import './BookFilter.css';


class BookFilter extends React.Component {
    render() {
        return (
            <div className='filterOption'>
                <label htmlFor='printType'>Print Type: </label>
                <select id='printType' name='printType' value={props.form.printType}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>magazines</option>
                </select>

                <label htmlFor='bookType'>Book Type: </label>
                <select id='bookType' name='bookType' value={props.form.bookType}>
                    <option value='noFilter'>No Filter</option>
                    <option value='ebooks'>eBooks</option>
                    <option value='freeBooks'>Free Books</option>
                    <option value='paidEbooks'>Paid eBooks</option>
                </select>
            </div>
        )
    }
};

export default BookFilter;
