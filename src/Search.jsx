import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UnconnectedSearch extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("search form submitted");
    this.props.dispatch({
      type: "search",
      searchQuery: this.searchInput.value
    });
    this.props.history.push("/searchResult");
  };

  render = () => {
    return (
      <div class="search-container">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              class="search-input"
              placeholder="Search for a username..."
              type="text"
              ref={ref => (this.searchInput = ref)}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated,
    searchQuery: st.searchQuery
  };
};
let Search = connect(mapStateToProps)(UnconnectedSearch);
export default withRouter(Search);
