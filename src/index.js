import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from'react-router-dom';
import Kanban from './vistas/Kanban';
import Error_404 from './vistas/Error_404';
import Home from './vistas/Home';

const routes = (<
    BrowserRouter>    
      <Switch>      
        <Route path="/kanban" component={Kanban} exact/>     
        <Route path="/" component={Home} exact/>     
        <Route path="*" component={Error_404} />    
      </Switch>  
    </BrowserRouter>
  ); 
    
  ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
