export const addSkyday = ()=>{
  return {
    type:"ADD_SKYDAY",
    payload:{
      name:"New Load"
    }
  }
}

export const addgoal = (goal)=>{
  return {
    type:'ADD_GOAL',
    payload:goal
  }
}
export const getusers = ()=> (dispatch,getState)=>{
  dispatch({
    type:'FETCH_USERS'
  });
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((value) => value.json())
  .then((users) => {
    dispatch({
      type:"ADD_USERS",
      payload:users
    })
  })
}
