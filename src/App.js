import React from 'react';
// import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { booksReducer } from './reducers/booksReducer';
import { BookComponent } from './components/BookComponent';

const store = createStore(booksReducer);

function App() {
  return (
    <Provider store={store}>
      <BookComponent />
    </Provider>
  );
}

export default App;



