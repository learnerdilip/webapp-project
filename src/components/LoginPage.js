import React from "react";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    // TODO
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="loginFrom" onSubmit={this.handleSubmit}>
          <p>
            <input
              placeholder="Enter your Name"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    fullstate: reduxState
  };
}

export default connect(mapStateToProps)(LoginPage);
