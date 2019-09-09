import React, { Component } from "react";
import { connect } from "react-redux";


class UnconnectedFilterUsers extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div>
       
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