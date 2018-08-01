import React, { Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {thunkTest} from '../action/action';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      a:0
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  handleClick(){
    this.props.fetchDate({x:1},(data)=>{
      console.log(data)
    });
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <div>{this.props.state.state}</div>
        <button onClick={()=>this.handleClick()}>async Btn</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {state}
}
const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    fetchDate:(...d)=>dispatch(thunkTest(...d))
  }
}
// const mapDispatchToProps=(dispatch,ownProps)=>{
//   return {
//     fetchDate:(...datas)=>dispatch((...datas)=>{
//       console.log(datas);
//       return {
//         type:"FETCH",
//         data:{x:2}
//       }
//     })
//   }
// }

export default connect(mapStateToProps,mapDispatchToProps)(App);
