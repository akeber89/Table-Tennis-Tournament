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
    <div className="panel">
      <button className="teamUp" onClick={showTeams}>
        Show Teams
      </button>
      {isTeamsVisible && (
        <>
          <p className="teamNumber">Team One</p>
          <ul className="list-group mt-4">
            {groupOne.map((groupOne, i) => (
              <li className="list-group-item" key={i}>
                {groupOne}
              </li>
            ))}
          </ul>

          <p className="teamNumber">Team Two</p>
          <ul className="list-group mt-4">
            {groupTwo.map((groupTwo, i) => (
              <li className="list-group-item" key={i}>
                {groupTwo}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default GenTeams;
