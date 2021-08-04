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

  // class App extends Component {

  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       foo: 'bar',
  //       resumeData: {}
  //     };
  
  //     ReactGA.initialize('UA-110570651-1');
  //     ReactGA.pageview(window.location.pathname);
  
  //   }
  
  //   getResumeData(){
  //     $.ajax({
  //       url:'./resumeData.json',
  //       dataType:'json',
  //       cache: false,
  //       success: function(data){
  //         this.setState({resumeData: data});
  //       }.bind(this),
  //       error: function(xhr, status, err){
  //         console.log(err);
  //         alert(err);
  //       }
  //     });
  //   }
  
  //   componentDidMount(){
  //     this.getResumeData();
  //   }

  
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