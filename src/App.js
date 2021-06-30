import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import App_Skill from './App_Skill';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App_Login from './App_Login';
import App_Register from './App_Register';
import { Navbar, Container, Nav,NavDropdown,Row } from 'react-bootstrap';
import App_UserProfile from './App_UserProfile';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login : 0
    }
  }
  login_user = (log) =>{
    this.setState({
      login : log
    });
  } 
  render() {
    const { error, login} = this.state;

    return (
    <div className="">
        {login == 0 ? 
          <App_Login login_user={this.login_user}/>
          // <App_Skill/> 
          :
          <Router>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">CRUD React user</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link to="/">Home</Nav.Link>
                  <Link to={'/user_profile'} className="nav-link">User Profile</Link>
                  <NavDropdown title="Master" id="basic-nav-dropdown">
                    <Link to={'/skill'} className="nav-link">Skill</Link>
                    <Link to={'/skill_level'} className="nav-link">Skill Level</Link>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              <Route path='/user_profile' component={App_UserProfile} />
              <Route path='/skill' component={App_Skill} />
          </Switch>
            {/* <App_Skill/> */}

            {/* <App_Register/> */}
            {/* <App_UserProfile/> */}
          </Router>
        }
    </div>
    
  );
}
}
export default App;
