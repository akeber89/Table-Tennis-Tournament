import React from "react";
import ping_pong from "../images/ping_pong.png";

const Figure = () => (
  <figure className="card">
    <img
      alt="table tennis competition poster"
      src={ping_pong}
      width="500"
      height="250"
    />
    <div>
      <figcaption className="card-text">
        Join us for an exciting competition, come and show your skills off!
      </figcaption>
    </div>
  </figure>
);

export default Figure;
