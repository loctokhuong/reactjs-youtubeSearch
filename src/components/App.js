import React, { Component } from "react";
import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";
import ListVideo from "./ListVideo";
import DetailVideo from "./DetailVideo";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: 0,
  };

  getYoutubeSearchData = async (searchText) => {
    const res = await youtube.get("/search", {
      params: {
        q: searchText,
      },
    });
    this.setState({ videos: res.data.items });
  };

  displayVideo = (index) => {
    console.log(index);
    this.setState({ selectedVideo: index });
  };

  componentDidMount() {
    this.getYoutubeSearchData("building");
  }
  render() {
    return (
      <div>
        <SearchBar getYoutubeSearchData={this.getYoutubeSearchData} />
        <DetailVideo video={this.state.videos[this.state.selectedVideo]} />

        <ListVideo
          videos={this.state.videos}
          displayVideo={this.displayVideo}
        />
      </div>
    );
  }
}

export default App;
