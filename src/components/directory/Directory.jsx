import React, { Component } from "react";
import { sections } from "../../directory.data";
import MenuItem from "../menu-item/MenuItem";
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
