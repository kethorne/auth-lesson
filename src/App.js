import React, {Component} from 'react';
import { Container, Row, Col, FormGroup, Button, Navbar, Badge } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: "",
    loginUsername: "",
    loginPassword: "",
  };

  componentDidMount() {
  //   fetch("http://localhost:3001/test", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify({ hello: "world" })
  //   }).then(rawJson => {
  //     return rawJson.json();
  //   }).then(data => {
  // });
  }

  onPasswordChange = Event => {
    this.setState({ password: Event.target.value });
  };

  createAccount = () => {
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match")
    } else if (!this.state.password ||
      !this.state.username ||
      !this.state.confirmPassword) {
      alert("Missing form fields")
    } else {
      fetch("http://localhost:3001/createAccount", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(rawJson => {
        return rawJson.json();
      }).then(data => {
      });
    };
  }

 login = () => {
   if (!this.state.loginPassword ||
      !this.state.loginUsername 
    ) {
      alert("Missing form fields")
    } else {
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.loginUsername,
          password: this.state.loginPassword
        })
      }).then(rawJson => {
        return rawJson.json();
      }).then(data => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({ error: null})
        }
      });
    };
  }

  render() {
    return (
      <Container>
        <Navbar color="secondary" size="xl" expand={true} padding={20} text={true}>
          <h2>Hello Max!</h2>
        </Navbar>
        <br></br>
        <Row>
          <Col>
        <h3>Create Account!</h3>
        <form>
          <FormGroup>
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" id="username" value={this.state.username}
              onChange={Event => {
                this.setState({ username: Event.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password:</label>
            <input type="text" className="form-control" id="password" value={this.state.password}
            onChange={Event => {
              this.setState({ password: Event.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text" className="form-control" id="confirmPassword" value={this.state.confirmPassword}
            onChange={Event => {
              this.setState({ confirmPassword: Event.target.value });
              }}
            />
          </FormGroup>
          <Button color="success" onClick={this.createAccount}>Create Account</Button>
            </form>
          </Col>
          <Col>
            {this.state.error ? (<p style={{ color: "red" }}>{this.state.error}</p>) : null}
            <h3>Login:</h3>
            <form>
          <FormGroup>
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" id="username" value={this.state.loginUsername}
              onChange={Event => {
                this.setState({ loginUsername: Event.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" value={this.state.loginPassword}
            onChange={Event => {
              this.setState({ loginPassword: Event.target.value });
              }}
                />
              </FormGroup>
              <Button color="success" onClick={this.login}>Login</Button>
              </form>
          </Col>
          </Row>
      </Container>
    
    );
  }
  }

