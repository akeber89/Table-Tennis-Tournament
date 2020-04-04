import React, { useState } from "react";

function GenTeams({ namesShuffled }) {
  const [isTeamsVisible, setIsTeamsVisible] = useState(false);

  const showTeams = () => {
    setIsTeamsVisible(true);
  };

  const splitNamesList = Math.floor(namesShuffled.length / 2);
  const groupOne = namesShuffled.slice(0, splitNamesList);
  const groupTwo = namesShuffled.slice(splitNamesList, namesShuffled.length);

  return (
    <>
      <button className="btn btn-primary mt-4" onClick={showTeams}>
        Create teams
      </button>
      {isTeamsVisible && (
        <>
          <ul className="list-group mt-4">
            {groupOne.map((groupOne, i) => (
              <li className="list-group-item" key={i}>
                {groupOne}
              </li>
            ))}
          </ul>
          <p>Team Two</p>
          <ul className="list-group mt-4">
            {groupTwo.map((groupTwo, i) => (
              <li className="list-group-item" key={i}>
                {groupTwo}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default GenTeams;
