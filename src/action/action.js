import axios from 'axios';
export const thunkTest=(data,callback)=>{
  return (dispatch, getState)=>{
    axios.get("https://www.easy-mock.com/mock/5ae173579507c919cd2dd453/example/mock").then(res=>{
      dispatch({
        type:"FETCH",
        data:res.data
      })
      callback(getState());
    })
  }

}
