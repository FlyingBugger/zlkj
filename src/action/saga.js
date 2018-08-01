import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchUser(x){
  
  try {
    const res=yield call(axios.get,"https://www.easy-mock.com/mock/5ae173579507c919cd2dd453/example/mock");
    yield put({type:"sagaCommit",user:res.data})
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message})
  } finally {

  }
}

function* mySaga(){
//  yield put({type:"sagaCommit",user})

  yield takeEvery("sagacommit",fetchUser)
}

export default function* rootSaga(){
  yield mySaga();
}
