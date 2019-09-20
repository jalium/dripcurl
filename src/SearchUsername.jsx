import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search.jsx";

class UnconnectedSearchUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render = () => {
    return (
      <div>
        <button class="btn-link" onClick={this.toggleHidden}>
          Search For Username
        </button>
        {!this.state.isHidden && <Search allUsers={this.props.allUsers} />}
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let SearchUsername = connect(mapStateToProps)(UnconnectedSearchUsername);
export default SearchUsername;
