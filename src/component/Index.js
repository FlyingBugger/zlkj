import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
class Index extends Component {

  componentDidMount(){

    axios.get("https://www.easy-mock.com/mock/5ae173579507c919cd2dd453/example/mock").then(res=>{
      console.log(res.data)
    })
  }
  handleClick(){
     console.log(1)
  }
  render() {
    return (
      <div className="App">
        <button onClick={()=>this.handleClick()}>async Btn</button>
      </div>
    );
  }
}

export default Index;
