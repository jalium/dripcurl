import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.allUsers,
      isFiltered: false,
      filteredResults: [],
      textures: {
        "2a": false,
        "2b": false,
        "2c": false,
        "3a": false,
        "3b": false,
        "3c": false,
        "4a": false,
        "4b": false,
        "4c": false
      },
      porosities: {
        high: false,
        medium: false,
        low: false
      }
    };
    this.onTextureChange = this.onTextureChange.bind(this);
    this.onChangePage = this.onChangePage.bind(this)
    //this.onPorosityChange = this.onPorosityChange.bind(this)
  }

  onChangePage() {

  }

  checkFilterTexture() {
    let filteredTextures = [];
    for (let key in this.state.textures) {
      if (this.state.textures[key]) {
        filteredTextures.push(key);
        console.log(this.state.results);
      }
    }

    if (filteredTextures.length > 0) {
      let filteredResults = [];
      this.state.results.forEach(result => {
        for (let i = 0; i < filteredTextures.length; i++) {
          if (
            result.type[0].texture === filteredTextures[i] &&
            result.type[0].texture != null
          ) {
            filteredResults.push(result);
          }
        }
      });
      console.log(filteredResults.length);
      if (filteredResults.length > 0) {
        this.props.dispatch({
            type: "filter",
          isFiltered: true,
          filteredResults: filteredResults
        });
      }
    } else {
      this.props.dispatch({
        type: "filter",
        isfiltered: false,
        filteredResults: []
      });
    }
  }

  onTextureChange(evt) {
    let value = evt.target.checked;
    let name = evt.target.name;
    let updateTextures = Object.assign({}, this.state.textures, {
      [name]: value
    });
    this.setState(
      {
        textures: updateTextures
      },
      this.checkFilterTexture()
    );
  }

  renderTextureFilter() {
    const textures = ["2a", "2b", "2c", "3a", "3b", "3c", "4a", "4b", "4c"];
    return textures.map((texture, i) => {
      return (
        <div key={i}>
          <input
            type="checkbox"
            name={texture}
            onChange={this.onTextureChange}
            value={this.state.textures[texture]}
          />
          <label key={i}> {texture}</label>
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
            {this.renderTextureFilter()}
          </li>
          <li>
            <button className="btn-drop">Porosity</button>
            <input type="checkbox" id="high" value="high" />
            <label htmlFor="high">high</label>
            <input type="checkbox" id="medium" value="medium" />
            <label htmlFor="medium">medium</label>
            <input type="checkbox" id="low" value="low" />
            <label htmlFor="low">low</label>
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
