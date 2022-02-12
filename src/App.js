// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import './css/style.scss';


class App extends Component {
  render() {
    return (
    <Router>
        <div className='contentWraper'>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contactus'} className="nav-link">Contact</Link></li>
            <li><Link to={'/aboutus'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <Routes>
              <Route exact path='/' component={Home} />
              <Route path='/contactus' component={ContactUs} />
              <Route path='/aboutus' component={AboutUs} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;