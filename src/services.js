import React, { Component } from 'react';
import { Route, Link,NavLink, BrowserRouter as Router } from 'react-router-dom'
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="services">
             <ul className="item" >
                 <li>
                     <Link to="/services/Forentrepreneurs" className="default-style"> For Entrepreneurs </Link>
              
                 </li>
                 <li>
                 <Link to="/services/Forstudents" className="default-style">For student</Link>
                 </li>
                 <li>
                 <Link to="/services/Forhobbyists" className="default-style">For hobbyists</Link>
                 </li>
             </ul>
            </div>
        );
    }
}
 
export default Services;