import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedDashProfile extends Component {
  constructor(props) {
    super(props);
    this.products = this.props.user.products.map((product, i) => (
      <ul>
        <li>shampoo: {product.shampoo}</li>
        <li>conditioner: {product.conditioner}</li>
        <li>leave-in: {product.leaveIn}</li>
        <li>styler: {product.stylers}</li>
        <li>treatment: {product.treatments}</li>
      </ul>
    ));
  }

  render = () => {
    return (
      <div>
        <div>
          <div>{this.props.user.username}</div>
        </div>
        <img height="100px" src={this.props.user.profilePic} />
        <div>
          {this.products.product !== null ? (
            <div>{this.products}</div>
          ) : (
            <div>no product listed</div>
          )}
        </div>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated,
    username: st.username
  };
};

let DashProfile = connect(mapStateToProps)(UnconnectedDashProfile);
export default DashProfile;
