import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {addSkyday,addgoal,getusers} from './actions';

import storeFactory from './store';
const store = storeFactory();
window.store = store;
store.dispatch(
  addSkyday()
);

store.dispatch(
  addgoal(12)
);

store.dispatch(
  getusers()
);
ReactDOM.render(<App />, document.getElementById('root'));
