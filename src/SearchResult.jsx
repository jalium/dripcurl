import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class UnconnectedSearchResult extends Component {
  constructor(props) {
    super(props);
  }

  searchedUser = () => {
    for (let i = 0; i < this.props.allUsers.length; i++) {
      if (this.props.allUsers[i].username === this.props.searchQuery)
        return this.props.allUsers[i];
    }
  };

  render = () => {
    let user = this.searchedUser();
    return (
      <div>
        <div>
          <header className="main-menu">
            <p>Hi, {this.props.username}</p>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">back to Dashboard</Link>
                </li>
              </ul>
            </nav>
          </header>

          <div className="content-outer">
            <header className="dripcurl-logo">
              <p>DRIPCURL</p>
            </header>
          </div>

          <div className="profile">
            <p>{user.username}</p>
            <img src={user.frontendPath} />
            <div className="hair-type">
              <p>Hair Type: </p>
              <ul>
                <li>
                  <b>pattern: </b>
                  {user.type[0].pattern}
                </li>
                <li>
                  <b>texture: </b>
                  {user.type[0].texture}
                </li>
                <li>
                  <b>porosity: </b>
                  {user.type[0].porosity}
                </li>
              </ul>
            </div>
            <div className="profile-products">
              <p>Fave Products:</p>
              <ul>
                <li>
                  <b>shampoo: </b>
                  {user.products[0].shampoo}
                </li>
                <li>
                  <b>conditioner: </b>
                  {user.products[0].conditioner}
                </li>
                <li>
                  <b>leave-in: </b>
                  {user.products[0].leaveIn}
                </li>
                <li>
                  <b>stylers: </b>
                  {user.products[0].stylers}
                </li>
                <li>
                  <b>treatments: </b>
                  {user.products[0].treatments}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
let mapStateToProps = st => {
  return {
    allUsers: st.allUsers,
    authenticated: st.authenticated,
    username: st.username,
    cookie: st.cookie,
    pattern: st.pattern,
    texture: st.texture,
    porosity: st.porosity,
    shampoo: st.shampoo,
    conditioner: st.conditioner,
    leaveIn: st.leaveIn,
    treatments: st.treatments,
    stylers: st.stylers,
    frontendPath: st.frontendPath,
    searchQuery: st.searchQuery
  };
};
let SearchResult = connect(mapStateToProps)(UnconnectedSearchResult);
export default withRouter(SearchResult);
