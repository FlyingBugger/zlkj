import React, { Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {thunkTest} from '../action/action';
import './App.css';

class App extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  handleClick(){
    this.props.dispatch((dispatch,getState)=>
    {
      axios.get("https://www.easy-mock.com/mock/5ae173579507c919cd2dd453/example/mock").then(res=>{
        dispatch({
          type:"FETCH",
          data:res.data
        })
        console.log(getState())
      })
    }
    );

  }
  render() {
    return (
      <div className="App">
        <button onClick={()=>this.handleClick()}>async Btn</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {state}
}
// const mapDispatchToProps=(dispatch,ownProps)=>{
//   return {
//     fetchDate:(d)=>dispatch(thunkTest(d))
//   }
// }


export default connect(mapStateToProps)(App);
