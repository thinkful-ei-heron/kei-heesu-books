import React from 'react';
import './BookFilter.css';


class BookFilter extends React.Component {

    render() {
        return (
            <div className='filterOption'>
                <label htmlFor='printType'>Print Type: </label>
                <select id='printType' name='printType' onChange={e=>this.props.handlePrintType(e.target.value)} >
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>

                <label htmlFor='bookType'>Book Type: </label>
                <select id='bookType' name='bookType' onChange={e=>this.props.handleBookType(e.target.value)}>
                    <option value=''>No Filter</option>
                    <option value='ebooks'>eBooks</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='full'>Full</option>
                    <option value='partial'>Partial</option>
                </select>
            </div>
        )
    }
};

export default BookFilter;
