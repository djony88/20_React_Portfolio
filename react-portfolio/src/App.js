import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import About from './Components/About';
  import Contact from './Components/Contact';
  import Portfolio from './Components/Portfolio';
  import Resume from './Components/Resume';

  function App() {
    return (
        <div>
           < Router>
           <div>
           <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route exact path ='/' component={About}/>
            <Route path = '/contact' component={Contact}/>
            <Route path='/portfolio' component = {Portfolio}/>
            <Route path='/resume' component = {Resume} />
        </Switch>
           </div>
           </Router>
        </div>
    )
  }

export default App;