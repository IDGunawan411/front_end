import React from 'react';
import axios from 'axios';
import { Table, Button, Alert,Col,Row,Container,Form } from 'react-bootstrap';

class App_UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profil : [],
    }
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:44383/api/UserProfile/Detail?username=gunn';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            profil: [result]
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
      const {profil} = this.state;
      return(
        <div className="container mt-5">
            <Row>
              
              <Col md={4}>
              <h5 className="mb-3">User Profile</h5>
              {profil.map(data => (
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <label>Name</label>
                        <Form.Control type="text" name="name" value={data.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address" >
                        <label>Address</label>
                        <Form.Control type="text" name="address" value={data.address}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label>Birth of date</label>
                        <Form.Control type="date" name="bod" value={data.bod}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <label>Email</label>
                        <Form.Control type="text" name="email" value={data.email}/>
                    </Form.Group>
                  <Button variant="primary">Update</Button>
                </Form>
                ))}
              </Col>
            </Row>
        </div>
      )
    }
  }
export default App_UserProfile;