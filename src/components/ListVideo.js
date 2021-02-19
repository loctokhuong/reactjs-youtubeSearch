import React, { Component } from "react";
import Video from "./Video";
export class ListVideo extends Component {
  render() {
    const renderedVideos = this.props.videos.map((video, index) => {
      const id = video.id.videoId;
      const title = video.snippet.title;

      const thumbnail = video.snippet.thumbnails.medium.url;
      const desctiption = video.snippet.description;
      return (
        <Video
          onClick={() => {
            this.props.displayVideo(index);
          }}
          key={id}
          src={thumbnail}
          alt={desctiption}
          title={title}
        />
      );
    });
    return <div>{renderedVideos}</div>;
  }
}

export default ListVideo;
