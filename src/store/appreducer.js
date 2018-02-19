import {combineReducers} from 'redux';

export const allskyDays = (state=[],action)=>{
  if (action.type == "ADD_SKYDAY") {
    return [
      ...state,
      action.payload
    ]
  }
  else {
    return state;
  }
}

export const goal = (state=10,action)=>{
  if (action.type=="ADD_GOAL") {
    return action.payload
  }
  else{
    return state;
  }
}

export const errors = (state=[],action)=>{
  switch (action.type) {
    case "ADD_ERROR":
      return [
        ...state,
        action.payload
      ]
      break;
    case "REMOVE_ERROR":
      return [];
      break;
    default:
      return state;
  }
}
export const fetching =(state=false,action)=>{
  if (action.type=='FETCH_USERS') {
    return true;
  }
  else{
    return state
  }
}
export const allusers = (state=[],action)=>{
  if (action.type=='ADD_USERS') {
    return [
      ...state,
      action.payload
    ]
  }
  else {
    return state;
  }
}

export default combineReducers({
  allskyDays,
  goal,
  errors,
  newusers:combineReducers({
    fetching,
    allusers
  })
});
