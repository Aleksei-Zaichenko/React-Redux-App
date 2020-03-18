import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {makeupReducer as reducer} from './reducers/makeupReducer';
import MakeupForm from './components/MakeupForm';
import MakeupList from './components/MakeupList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Fancy MakeUp</h1>
        <MakeupForm />
        <MakeupList />
      </div>
    </Provider>
  );
}

export default App;
