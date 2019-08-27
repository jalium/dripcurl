import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <>
        <div>
          <h3>Scroll through profile updates from users in your hair community</h3>
        </div>
        <div>
          <Link to="/profile">Your profile</Link>
        </div>
        <p>dropdown to filter or unfilter users</p>
        <p>search for username</p>
      </>
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
