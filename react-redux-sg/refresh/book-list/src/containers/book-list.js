import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList = () => {
        return this.props.books.map(book => (
            <li
                key={book.title}
                className="list-group-item"
                onClick={() => this.onSelectBook(book)}
            >
                {book.title}
            </li>
        ))
    }

    onSelectBook = book => {
        this.props.selectBook(book)
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    // Whatever is returned from here will 
    // show up as props inside of BookList
    return {
        books: state.books
    };
};

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
};

// Promote BookList from a component to a container.
// It needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
