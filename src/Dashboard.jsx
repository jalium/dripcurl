import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
        <h1>Welcome to your dashboard</h1>
      </div>
    );
  };
}
let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let Dashboard = connect(mapStateToProps)(UnconnectedDashboard);
export default Dashboard;
