import React, { Component } from "react";

import SingleNews from "../single-news/SingleNews";

import "./fetch-news.style.css";

class FetchNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      hits: [],
    };
  }

  onSearch = (e) => {
    e.preventDefault();

    const { query } = this.state;
    if (query === "") {
      return;
    }

    //Local Storage
    const savedHits = localStorage.getItem(query);

    if (savedHits) {
      this.setState({ hits: JSON.parse(savedHits) });
    } else {
      fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
        .then((res) => res.json())
        .then((data) => this.onSetResult(data, query));
    }
  };

  onSetResult = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data.hits));
  };

  onChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { hits } = this.state;
    return (
      <div className="fetch-news">
        <form className="form" onSubmit={this.onSearch}>
          <input type="search" placeholder="Search" onChange={this.onChange} />
        </form>
        <div className="item">
          {hits &&
            hits
              .filter((hit, idx) => idx < 10)
              .map((hit) => {
                return (
                  <SingleNews key={hit.objectID} result={hit}></SingleNews>
                );
              })}
        </div>
      </div>
    );
  }
}

export default FetchNews;
