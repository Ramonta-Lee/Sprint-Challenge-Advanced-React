import React from "react";

const PlayerCard = props => {
  // console.log("PlayerCard Props", props);

  return (
    <div className="card-container">
      {props.players.map(player => {
        return (
          <div key={player.id}>
            <h2>{player.name}</h2>
            <p>Country: {player.country}</p>
            <p>Number of Searches: {player.searches}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCard;
