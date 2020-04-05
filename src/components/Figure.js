import React from "react";
import ping_pong from "../images/ping_pong.jpg";

const Figure = () => (
  <figure className="card">
    <img alt="table tennis competition poster" src={ping_pong} />
    <div>
      <figcaption className="card-text">
        Join us for an exciting competition!
      </figcaption>
    </div>
  </figure>
);

export default Figure;
