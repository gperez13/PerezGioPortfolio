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
                <h3>Something | Something else</h3><br/>
                <h1>Giovanni Perez</h1>
                <hr/>
                <Link to="/about"><p class="smoothScroll btn btn-default">What I do</p></Link>
                <Link to="/projects"><p class="smoothScroll btn btn-default">Projects</p></Link>
              </div>
            </div>
          </div>    
        </section>












        

          
                 <nav id="nav">
                  <container>
                    <ul style={{"list-style": "none", float: "right"}}>
                      <Link to="/About"><li>About</li></Link>
                      <Link to="/Projects"><li>Projects</li></Link>
                      <Link to="/Skills"><li>Skills</li></Link>
                    </ul>
                  </container>
                </nav>



             <Route path="/about"  component={About}/>
             <Route path="/projects"  component={Projects}/>
             <Route path="/skills"  component={Skills}/>


          </div>
        </Router>




        <footer/>


      </div>















    );
  }
}

export default App;
