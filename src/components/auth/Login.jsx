import * as axios from 'axios';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, Redirect} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
import * as swal from 'sweetalert';

export default class Login extends React.Component {
  state = {
    email: null,
    password: null,
    pindah: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('https://doscomdu.herokuapp.com/api/user', data)
      .then((res) => {
        let url = `/admin/${res.data._id}`;
        this.setState({
          pindah: <Redirect to={url} />,
        });
      })
      .catch((err) => {
        console.error(err.response);
        swal({
          icon: 'error',
          title: err.response.statusText,
          text: err.response.data.message,
        });
      });
  };

  render() {
    return (
      <Container style={{height: '100vh'}}>
        {this.state.pindah}
        <Row className="h-100 justify-content-center align-items-center">
          <Col md="4">
            <Card>
              <CardHeader className="text-center">Login</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'user']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={['fas', 'user']} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="password"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Button
                      onClick={this.handleLogin}
                      color="primary"
                      size="lg"
                      block>
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter className="text-right">
                <Link to="/">Home</Link> | <Link to="/register">Create</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
