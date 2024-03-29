import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInputSignup: "",
      emailInputSignup: "",
      passwordInputSignup: ""
    };
  }

  handleUsernameInputChange = evt => {
    console.log("username input", evt.target.value);
    this.setState({ usernameInputSignup: evt.target.value });
  };

  handleEmailInputChange = evt => {
    console.log("email input", evt.target.value);
    this.setState({ emailInputSignup: evt.target.value });
  };

  handlePasswordInputChange = evt => {
    console.log("password input", evt.target.value);
    this.setState({ passwordInputSignup: evt.target.value });
  };
  handleSubmitSignup = async evt => {
    evt.preventDefault();
    console.log("signup form submitted");
    let data = new FormData();
    data.append("username", this.state.usernameInputSignup);
    data.append("email", this.state.emailInputSignup);
    data.append("password", this.state.passwordInputSignup);
    let response = await fetch("/signup", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let resText = await response.text();
    console.log("/signup response", resText);
    let body = JSON.parse(resText);
    if (body.success) {
      this.props.dispatch({
        type: "user",
        username: body.username
      });
      let logResponse = await fetch("/login", {
        method: "POST",
        body: data,
        credentials: "include"
      });
      let logResText = await logResponse.text();
      console.log("/login response", logResText);
      let logBody = JSON.parse(logResText);
      if (logBody.currentUser.success) {
        this.props.dispatch({
          type: "login",
          authenticated: true
        }),
          this.props.dispatch({
            type: "loadUsers",
            allUsers: logBody.userData
          });
        this.props.history.push("/curltype");
      }
    }
  };

  render = () => {
    return (
      <div className="signup-container">
        <div className="signup-header">
          <h1>Sign Up</h1>
          <form className="signup" onSubmit={this.handleSubmitSignup}>
            <input
              className="no-border"
              type="text"
              placeholder="username"
              onChange={this.handleUsernameInputChange}
            />

            <input
              className="no-border"
              type="text"
              placeholder="email"
              onChange={this.handleEmailInputChange}
            />

            <input
              className="no-border"
              type="password"
              placeholder="password"
              onChange={this.handlePasswordInputChange}
            />

            <input
              className="no-border"
              type="password"
              placeholder="confirm password"
              onChange={this.handleConfirmChangeSignup}
            />
            <input className="btn" type="submit" value="Find your curl type" />
          </form>
          <div className="link-login">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    username: st.username,
    authenticated: st.authenticated
  };
};
let Signup = connect(mapStateToProps)(UnconnectedSignup);
export default withRouter(Signup);
//not you? Log in with a different account
//Need an account? Sign up now
