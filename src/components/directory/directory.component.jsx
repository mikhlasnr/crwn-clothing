import React, { Component } from "react";
import sections from "../../data/directory.data.js";
import MenuItem from "../menu-item/menuItem.component";
import "./directory.style.scss";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections,
    };
  }

  render() {
    console.log(this.state.sections);
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
