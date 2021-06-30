import React from 'react';
import axios from 'axios';
import { Table, Button, Alert,Col,Row,Container,Form } from 'react-bootstrap';
import App from './App';

class App_Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login : '0'
    }
  }
  render() {
    const {login} = this.state
      return(
        <div className="container mt-5">
            <Row>
              <Col md={4}>
              <h5 className="mb-3">Login</h5>
              {login}
                <Form>
                  <Form.Group className="mb-3" controlId="nama">
                    <label>Username</label>
                    <Form.Control type="text" name="nama"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="nama">
                    <label>Password</label>
                    <Form.Control type="password" name="nama"/>
                  </Form.Group>
                  <Button variant="primary" onClick={() => this.props.login_user("1")}>Login</Button>
                </Form>
              </Col>
            </Row>
        </div>
      )
    }
  }
export default App_Login;