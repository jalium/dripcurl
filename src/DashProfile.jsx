import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedDashProfile extends Component {
  constructor(props) {
    super(props);
    this.products = this.props.user.products.map((product, i) => (
      <ul>
        <li>
          <b>shampoo:</b> {product.shampoo}
        </li>
        <li>
          <b>conditioner:</b> {product.conditioner}
        </li>
        <li>
          <b>leave-in:</b> {product.leaveIn}
        </li>
        <li>
          <b>styler:</b> {product.stylers}
        </li>
        <li>
          <b>treatment:</b> {product.treatments}
        </li>
      </ul>
    ));
  }

  render = () => {
    return (
      <div className="dash-profile">
        <p>{this.props.user.username}</p>
        <img src={this.props.user.profilePic} />
        <div className="products">
          {/* {this.props.user.products.map(product =>
            product !== undefined ? ( */}
          <p>favourite products:</p>
          <div>{this.products}</div>
          {/* ) : (
              <div>no product listed</div>
            ) */}
          {/* )} */}
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
