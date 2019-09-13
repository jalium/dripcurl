import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedFilterUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      searchQuery: ""
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render = () => {
    return (
      <div>
        <button class="btn-link" onClick={this.toggleHidden.bind(this)}>
          Search for User
        </button>
        {!this.state.isHidden && <Child />}
      </div>
    );
  };
}

const Child = () => (
  <div>
    <input type="text" placeholder="search..." />
  </div>
);

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let FilterUsers = connect(mapStateToProps)(UnconnectedFilterUsers);
export default FilterUsers;
