import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import MySaga from '../action/saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const initState={
  state:'no'
}
//reducer
const reducer=(state=initState,action)=>{
  switch (action.type) {
    case "FETCH":
      return {state:'yes'} //{...state,data:action.data}
      break;
    case  "sagaCommit":
      return {...state,data:action.user}
    default:

  }
  return state;
}
let store=createStore(reducer,applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(MySaga);

export {store};
