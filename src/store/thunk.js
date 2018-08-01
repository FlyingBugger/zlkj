import {applyMiddleware,createStore} from 'redux';
import axios from 'axios';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

//日志中间键
const loggerMiddleware=createLogger();

const initState={
  state:'no'
}
//reducer
const reducer=(state=initState,action)=>{
  switch (action.type) {
    case "FETCH":
      return {state:'yes'} //{...state,data:action.data}
      break;
    default:

  }
  return state;
}

const middleware=applyMiddleware(thunk,loggerMiddleware);

export let store=createStore(reducer,middleware);
