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
    // } else {
    //   console.log("cookie", document.cookie);
    return (
      <div>
        <Dashboard />
      </div>
    );
    // }
  };

  renderSignup = () => {
    return (
      <div>
        <Signup />
      </div>
    );
  };

  renderLogin = () => {
    return (
      <div>
        <Login />
      </div>
    );
  };

  renderCurlType = () => {
    return (
      <div>
        <CurlType />
      </div>
    );
  };

  renderDashboard = () => {
    return (
      <div>
        <Dashboard />
      </div>
    );
  };

  renderProfile = () => {
    return (
      <div>
        <Profile />
      </div>
    )
  }

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={this.renderLanding} />
        <Route exact={true} path="/signup" render={this.renderSignup} />
        <Route exact={true} path="/login" render={this.renderLogin} />
        <Route exact={true} path="/curltype" render={this.renderCurlType} />
        <Route exact={true} path="/dashboard" render={this.renderDashboard} />
        <Route exact={true} path="/profile" render={this.renderProfile} />
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
