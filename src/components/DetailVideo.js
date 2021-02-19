import React, { Component } from "react";

export class DetailVideo extends Component {
  render() {
    const video = this.props.video;
    if (!video) {
      return "loading...";
    }
    return (
      <div>
        <iframe
          title={video.title}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    );
  }
}

export default DetailVideo;
