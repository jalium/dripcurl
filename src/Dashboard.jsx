import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        <nav>
          <Link to="/profile">Your profile</Link>
          <p>dropdown to filter or unfilter users</p>
          <p>search for username</p>
        </nav>
        <header id="browse-header">
          <h3>
            Scroll through profile updates from users in your hair community
          </h3>
        </header>

        <main id="browse-profile">
          {this.state.allUsers.map((user, i) => (
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
export default Dashboard;
