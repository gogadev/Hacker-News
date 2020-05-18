import React from "react";

import "./single-news.style.css";

const SingleNews = ({ result }) => {
  return (
    <div className="single-news">
      <h5 className="links">{result.title}</h5>
      <a href={result.url} target="_blank" className="link">
        More
      </a>
    </div>
  );
};

export default SingleNews;
