import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link,NavLink, BrowserRouter as Router } from 'react-router-dom'
import Contact from './Contact';
import  Services from './services'
import  Service from './service'



const routing = (


  <Router>
       <nav>
        <ul className="d-flex align-items-center justify-content-center">
          <li className="mx-1 mt-2">
            <NavLink exact to="/Home" className="default-style" activeClassName="active-style">Home</NavLink>
          </li>
          <li className="mx-1 mt-2">
            <NavLink  exact to="/services" className="default-style" activeClassName="active-style">Services</NavLink>
          </li>
          <li className="mx-1 mt-2">
            <NavLink exact to="/contact" className="default-style" activeClassName="active-style">Contact</NavLink>
          </li>
        </ul>
      </nav>


    
<Route   path="/" component={App} />
<Route   path="/services" component={Services} />
<Route path="/services/:id" component={Service} />
<Route   path="/Contact" component={Contact} />



  </Router>
 

)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
