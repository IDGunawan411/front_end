import React from 'react';
import axios from 'axios';
import { Table, Button, Alert,Col,Row } from 'react-bootstrap';

class App_Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      app_skills: [],
      response: {},
      resp : '',
      skillName : ''
    }
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:44383/api/Skill/GetSkills';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            app_skills: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

deleteSkill = (skill_id) => {
    const { app_skills } = this.state;
    const apiUrl = 'https://localhost:44383/api/Skill/Delete?idSkill=' + skill_id ;
    const options = {
      method: 'DELETE',
    }

    fetch(apiUrl, options);
    const newapp_skill = app_skills
    .filter((app_skills) => app_skills.skillId !== skill_id)
    .map((filterapp_skill) => {
        return filterapp_skill;
    });

    this.setState({
        app_skills: newapp_skill
    });
  }


     handleChange = event => {
        this.setState({ skillName: event.target.value });
    }

    handleSubmit = event => {
    event.preventDefault();

    event.preventDefault();

    const skillnew = {
      skillName: this.state.skillName
    };

    axios.post("localhost:44383/api/Skill/Create", skillnew )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    // const response = await fetch('https://localhost:44383/api/Skill/Create', requestOptions);

    // axios.post("https://localhost:44383/api/Skill/Create", skillnew,)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  render() {
    const { error, app_skills} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div className="container mt-5">
          <h2>Skill</h2>
          {this.state.resp}
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Row>
            <Col md={12}>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Skill ID</th>
                            <th>Skill Name</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {app_skills.map(data => (
                        <tr key={data.skillId}>
                            <td>{data.skillId}</td>
                            <td>{data.skillName}</td>
                            <td>
                                {/* <Button variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</Button> */}
                                &nbsp;<Button variant="danger" onClick={() => this.deleteSkill(data.skillId)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Skill Name:
                            <input type="text" name="skillName" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default App_Skill;