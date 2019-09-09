import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DashProfile from "./DashProfile.jsx";

class UnconnectedDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    };
  }

  componentDidMount() {
    this.handleLoadUsers();
  }

  handleLogout = async evt => {
    let response = await fetch("/logout", {
      method: "GET",
      credentials: "include"
    });
    let resText = await response.text();
    console.log("/logout response", resText);
    let body = JSON.parse(resText);
    if (body.success) {
      this.props.dispatch({ type: "logout" });
      this.props.history.push("/");
    }
  };

  handleLoadUsers = async evt => {
    let response = await fetch("/dashboard", { method: "GET" });
    let resText = await response.text();
    console.log("/dashboard response ", resText);
    let body = JSON.parse(resText);
    if (body.length !== 0) {
      this.setState({ allUsers: body });
    }
  };

  render = () => {
    return (
      <div>
        <header className="main-menu">
          <p>Hi, {this.props.username}</p>
          <nav>
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>all hairtypes</li>
              <li>search for username</li>
              <li>
                <button onClick={this.handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>

        <div className="content-outer">
          <header className="dripcurl-logo">
            <p>DRIPCURL</p>
          </header>
        </div>

        <main className="browse-profile">
          {this.state.allUsers
            .filter(user => {
              return (
                user.type[0].pattern === this.props.pattern &&
                user.type[0].texture === this.props.texture &&
                user.type[0].porosity === this.props.porosity
              );
            })
            .map((user, i) => (
              <DashProfile user={user} key={i} />
            ))}
        </main>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated,
    username: st.username,
    pattern: st.pattern,
    texture: st.texture,
    porosity: st.porosity
  };
};
let Dashboard = connect(mapStateToProps)(UnconnectedDashboard);
export default withRouter(Dashboard);
