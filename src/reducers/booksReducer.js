import bigData from '../images/bigData.jpg'
import champion from '../images/champion.jpg'
import ingeneric from '../images/ingeneric.png'
import kox from '../images/kox.jpg'
import rework from '../images/rework.jpg'
import { SET_BOOK, DEL_BOOK, FIXED_BOOK } from '../actions/actionBooks'

const initialState = {
    books: [
        { id: 1, PhotoBook: bigData, ProductEntity: "Big Data", Name: "Big Data", Description: "about", Price: 1134 },
        { id: 2, PhotoBook: champion, ProductEntity: "Champion", Name: "Champion", Description: "about", Price: 234 },
        { id: 3, PhotoBook: ingeneric, ProductEntity: "Ingeneric", Name: "Ingeneric", Description: "about", Price: 274 },
        { id: 4, PhotoBook: kox, ProductEntity: "Kox 80/20", Name: "80/20", Description: "about", Price: 294 },
        { id: 5, PhotoBook: rework, ProductEntity: "Rework", Name: "Rework", Description: "about", Price: 534 }
    ],
    newPostText: "add-book"
};

export const booksReducer = (state = initialState, action) => {
    const books = booksAction[action.type];
    return books
        ? books(state, action)
        : state;
};

const booksAction = {
    [SET_BOOK]: state => ({
        ...state,
        requested: true,
    }),

    [DEL_BOOK]: (state, action) => ({
        ...state,
        loadedUsers: action.payload.loadedUsers,
        users: action.payload.users,
    }),

    [FIXED_BOOK]: (state, action) => ({
        ...state,
        loadedTodos: true,
        todos: action.payload.todos,
        filteredTodos: action.payload.todos,
    })
};


export default booksReducer;










// const booksReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_BOOKS: {
//             return {
//                 ...state,
//                 initialState: state.books
//             }
//         }
//         default:
//             return state;
//     };
// };


// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
// const SEND_MESSAGE = "SEND-MESSAGE";


// export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



