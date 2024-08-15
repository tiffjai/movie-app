import React from 'react';
import { Link } from "react-router-dom";

const linkColor = {
    color: "#1746A2"
};

export default function HomePage() {
  return (
    <>
      <h1>Top TV</h1>
      <span>All about the smaller silver screen</span>
      <ul>
        <li>
          <Link to="/shows" style={linkColor}>Explore shows</Link>
        </li>
        <li>
          <Link to="/search" style={linkColor}>Search your favorite show</Link>
        </li>
      </ul>
    </>
  );
}
