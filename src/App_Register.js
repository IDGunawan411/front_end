import React from 'react';
import axios from 'axios';
import { Table, Button, Alert,Col,Row,Container,Form } from 'react-bootstrap';

class App_Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
      return(
        <div className="container mt-5">
            <Row>
              <Col md={4}>
              <h5 className="mb-3">Register</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="username">
                        <label>Username</label>
                        <Form.Control type="text" name="username"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nama">
                        <label>Name</label>
                        <Form.Control type="text" name="nama"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <label>Address</label>
                        <Form.Control type="text" name="address"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bod">
                        <label>Birth of date</label>
                        <Form.Control type="date" name="bod"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <label>Email</label>
                        <Form.Control type="text" name="email"/>
                    </Form.Group>
                  <Button variant="primary">Login</Button>
                </Form>
              </Col>
            </Row>
        </div>
      )
    }
  }
export default App_Register;