import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "./Filter.jsx";

class UnconnectedFilterUsers extends Component {
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
          Filter Hairtypes
        </button>
        {!this.state.isHidden && <Filter allUsers={this.props.allUsers} />}
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let FilterUsers = connect(mapStateToProps)(UnconnectedFilterUsers);
export default FilterUsers;
