import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import './App.css';
import Home from'./Home';
import Category from './Category';
import Product from'./Product';
import Admin  from'./Admin'

function App() {
  return (
    <BrowserRouter>
        
         <Route exact path="/" component={Home}/>
          <Route  path="/category" component={Category}/>
          <Route  path="/product"component={Product}/>
          <Route  path="/admin"component={Admin} />
        
      
    </BrowserRouter>
  );
}

export default App;
