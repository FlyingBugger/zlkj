import React, { Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props){

    super(props);
    this.state={
      a:0
    }
  }
  componentDidMount(){
//    this.props.dispatch({type:'sagacommit',x:1})
  this.props.dispatch((dispatch)=>{
    dispatch({type:'sagacommit',x:1})
  })
  }
  handleClick(){
    this.props.fetchDate({x:1});
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
/*
const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    fetchDate:(...d)=>dispatch({type:"sagacommit"})
  }
}*/

export default connect(mapStateToProps)(App);
