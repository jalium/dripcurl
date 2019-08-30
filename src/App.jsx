import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Landing from "./Lapa.jsx";
import Footer from "./Footer.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import CurlType from "./CurlType.jsx";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";

class UnconnectedApp extends Component {
  renderLanding = () => {
    //if (document.cookie === undefined) {
    return (
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  };
  // } else {
  //   console.log("cookie", document.cookie);

  renderDashboard = () => {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
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
