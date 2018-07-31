import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import App from '../component/App';
import Index from '../component/Index';
export  const layout= (
  <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/product" component={Index}/>
      </Switch>
  </div>
)
