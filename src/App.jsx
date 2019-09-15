import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Lapa.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import CurlType from "./CurlType.jsx";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import EditProfile from "./EditProfile.jsx";
import "./css/Lapa.css";
import "./css/main.css";
import "./css/signup.css";
import "./css/dashProfile.css";
import "./css/dashboard.css";
import "./css/profile.css";
import "./css/editProfile.css";

class UnconnectedApp extends Component {
  renderLanding = () => {
    return (
      <div>
        <Landing />
      </div>
    );
  };

  renderDashboard = () => {
    if (this.props.authenticated) {
      return (
        <div>
          <Dashboard />
        </div>
      );
    } else {
      return (
        <div>
          <Landing />
        </div>
      );
    }
  };

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={this.renderLanding} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/curltype" component={CurlType} />
        <Route exact={true} path="/dashboard" render={this.renderDashboard} />
        <Route exact={true} path="/profile" component={Profile} />
        <Route exact={true} path="/editProfile" component={EditProfile} />
      </BrowserRouter>
    );
  };
}
let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};

let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
