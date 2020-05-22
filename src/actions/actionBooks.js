export const SET_BOOK = 'SET_BOOK';
export const DEL_BOOK = 'DEL_BOOK';
export const FIXED_BOOK = 'FIXED_BOOK';


export function addBook(bookId) {
    return {
        type: SET_BOOK,
        bookId,
    };
}

export function deleteBook(bookId) {
    return {
        type: DEL_BOOK,
        payload: bookId,
    };
}

export function fixedBook(bookId) {
    return {
        type: FIXED_BOOK,
        payload: bookId,
    };
}
