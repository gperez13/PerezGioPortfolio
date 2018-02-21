import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Header from './Header/Header.js';
import Projects from './Projects/Projects.js';
import Skills from './Skills/Skills.js';
import State from './State/State.js';

class App extends Component {
  render() {
    return (



      <div>
        <Router>
          <div>






        <section id="home" style={{"margin-bottom": "50px"}}>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                
                <h1>Giovanni Perez</h1>
                <br/>
                <h3>Something | Something else</h3>
                <hr/>
                <Link to="/about"><p class="smoothScroll btn btn-default">What I do</p></Link>
                <Link to="/projects"><p class="smoothScroll btn btn-default">Projects</p></Link>
                <Link to="/Skills"><p class="smoothScroll btn btn-default">Skills</p></Link>
                <Link to="/State"><p class="smoothScroll btn btn-default">State</p></Link>
              
              </div>
            </div>
          </div>    
        </section>












        

          




             <Route path="/home"  component={Header}/>
             <Route path="/about"  component={About}/>
             <Route path="/projects"  component={Projects}/>
             <Route path="/skills"  component={Skills}/>
             <Route path="/state"  component={State}/>

          </div>
        </Router>




     


      </div>















    );
  }
}

export default App;
