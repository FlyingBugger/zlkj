import {applyMiddleware,createStore} from 'redux';
import axios from 'axios';

import thunk from 'redux-thunk';

const initState={
  state:'no'
}
//reducer
const reducer=(state=initState,action)=>{
  switch (action.type) {
    case "FETCH":
      return {...state,data:action.data}
      break;
    default:

  }
  return state;
}

const middleware=applyMiddleware(thunk);

export let store=createStore(reducer,middleware);
