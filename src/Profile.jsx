import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedProfile extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <>
        <div>
          <Link to="/dashboard">back to Dashboard</Link>
        </div>
        <div>
          <h3>{username}</h3>
          <p>Hair Type: {pattern, texture, porosity}</p>
        </div>
        <div>Profile picture</div>
        <p>Current Products</p>
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