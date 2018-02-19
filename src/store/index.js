import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import allreducers from './appreducer';

const consoleMessages = store => next => action =>{

      console.log(`
          The Original state
          ${JSON.stringify(store.getState())}

        `);
        let result = next(action);

        console.log(`
          The New State
          ${JSON.stringify(store.getState())}
          `);

          return result;
}

export default (intialstate={})=>{
  return applyMiddleware(thunk,consoleMessages)(createStore)(allreducers,intialstate);
}
