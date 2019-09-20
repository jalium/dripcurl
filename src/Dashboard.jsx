import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DashProfile from "./DashProfile.jsx";
import SearchUsername from "./SearchUsername.jsx";

class UnconnectedDashboard extends Component {
  constructor(props) {
    super(props);
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
              <li>
                <SearchUsername />
              </li>
              <li>
                <button className="btn-link" onClick={this.handleLogout}>
                  Logout
                </button>
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
          {this.props.allUsers
            .filter(user => {
              return (
                user.username !== this.props.username &&
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
    allUsers: st.allUsers,
    authenticated: st.authenticated,
    username: st.username,
    pattern: st.pattern,
    texture: st.texture,
    porosity: st.porosity
  };
};
let Dashboard = connect(mapStateToProps)(UnconnectedDashboard);
export default withRouter(Dashboard);
