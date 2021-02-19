import React, { Component } from "react";

export class Video extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <img src={this.props.src} alt={this.props.alt} />
        <div>{this.props.title}</div>
      </div>
    );
  }
}

export default Video;
