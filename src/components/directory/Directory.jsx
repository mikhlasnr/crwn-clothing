import React, { Component } from "react";
import sections from "../../assets/data/directory.data.js";
import MenuItem from "../menuItem/MenuItem";
import "./Directory.scss";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
