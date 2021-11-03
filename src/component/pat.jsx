import React, { Component } from "react";
import "./pat.css";

class Pat extends Component {
  render() {
    return <a href={this.props.patLink || "#"}>click on pat link</a>;
  }
}
export default Pat;
