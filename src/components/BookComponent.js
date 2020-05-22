import { connect } from 'react-redux';
import { Books } from './Books';


function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // handleClick: () => dispatch(handleClick()),
        // filterChanged: event => dispatch(filterChanged(event)),
    };
}

export const BookComponent = connect(mapStateToProps, mapDispatchToProps)(Books);