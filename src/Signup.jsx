import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInputSignup: "",
      emailInputSignup: "",
      passwordInputSignup: ""
    };
  }
  // componentDidMount() {
  //   this.props.authenticated;
  // }
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
        user: body.username
      });
      this.props.history.push("/curltype");
    }
  };

  render = () => {
    if (this.props.authenticated === false) {
      return (
        <form onSubmit={this.handleSubmitSignup}>
          <label>Username</label>
          <input type="text" onChange={this.handleUsernameInputChange} />
          <label>Email</label>
          <input type="text" onChange={this.handleEmailInputChange} />
          <label>Password</label>
          <input type="password" onChange={this.handlePasswordInputChange} />
          <label>Confirm Password</label>
          <input type="password" onChange={this.handleConfirmChangeSignup} />
          <input type="submit" value="Sign Up" />
        </form>
      );
    } else if (this.props.authenticated) {
      return <h1>main page</h1>;
    }
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