import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  if (action.type === 'SET_BOOKLIST'){
    // payload is response.data from GET to /books
    // payload/response.data is all of the books
    // this will replace old booklist with fresh new booklist
    // dont' need spread operator here, because we don't care about old value for this purpose
    return action.payload
  }
  return state;
}

const reduxStore = createStore(
  combineReducers({
    bookList
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

