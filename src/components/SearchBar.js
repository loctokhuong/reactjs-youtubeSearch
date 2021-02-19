import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    inputText: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getYoutubeSearchData(this.state.inputText);
  };

  hanldeChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.hanldeChange}
            value={this.state.inputText}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
