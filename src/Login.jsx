import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInputLogin: "",
      passwordInputLogin: ""
    };
  }
  handleUsernameInputChange = evt => {
    this.setState({ usernameInputLogin: evt.target.value });
  };
  handlePasswordInputChange = evt => {
    this.setState({ passwordInputLogin: evt.target.value });
  };
  handleSubmitLogin = async evt => {
    evt.preventDefault();
    console.log("login submitted");
    let data = new FormData();
    data.append("username", this.state.usernameInputLogin);
    data.append("password", this.state.passwordInputLogin);
    let response = await fetch("/login", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let resText = await response.text();
    console.log("/login response ", resText);
    let body = JSON.parse(resText);
    if (body.success) {
      this.props.dispatch(
        {
          type: "user",
          user: body.username,
          cookie: body.cookie
        },
        { type: "login", authenticated: true }
      );
      this.props.history.push("/dashboard");
    }
  };
  render = () => {
    if (this.props.authenticated === false) {
      return (
        <form onSubmit={this.handleSubmitLogin}>
          <label>Username</label>
          <input
            id="user"
            type="text"
            onChange={this.handleUsernameInputChange}
          />
          <label>Password</label>
          <input
            id="password"
            type="password"
            onChange={this.handlePasswordInputChange}
          />
          <input type="submit" value="Log In" />
        </form>
      );
    }
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let Login = connect(mapStateToProps)(UnconnectedLogin);
export default withRouter(Login);
