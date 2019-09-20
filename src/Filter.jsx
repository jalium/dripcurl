import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.allUsers,
      filter: {
        "2a": false,
        "2b": false,
        "2c": false,
        "3a": false,
        "3b": false,
        "3c": false,
        "4a": false,
        "4b": false,
        "4c": false,
        high: false,
        medium: false,
        low: false
      }
    };
    //this.onPorosityChange = this.onPorosityChange.bind(this)
  }

  onFilterChange = (evt) => {
    let value = evt.target.checked;
    let name = evt.target.name;
    let updateFilters = Object.assign({}, this.state.textures, {
      [name]: value
    });
    this.setState({
      filter: updateFilters
    });
  }

  renderFilter() {
    const filters = [
      "2a",
      "2b",
      "2c",
      "3a",
      "3b",
      "3c",
      "4a",
      "4b",
      "4c",
      "high",
      "medium",
      "low"
    ];
    return filters.map((filter, i) => {
      return (
        <div key={i}>
          <input
            type="checkbox"
            name={filter}
            onChange={this.onFilterChange}
            value={this.state.filter[filter]}
          />
          <label key={i}> {filter}</label>
        </div>
      );
    });
  }
  render = () => {
    return (
      <div className="dropdown">
        <ul>
          <li>
            <button className="btn-drop">Texture</button>
            {this.renderFilter()}
          </li>
        </ul>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    authenticated: st.authenticated
  };
};
let Filter = connect(mapStateToProps)(UnconnectedFilter);
export default Filter;
