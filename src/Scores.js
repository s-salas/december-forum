import React, { useState } from "react";

function Scores({ teams, updateTeamPlayers }) {
  // Separate state for each team’s player input
  const [teamPlayers, setTeamPlayers] = useState({
    Team1: "",
    Team2: "",
    Team3: "",
    Team4: "",
  });

  // Handle changes to player name inputs for each team
  const handlePlayerNameChange = (event, teamName) => {
    setTeamPlayers({
      ...teamPlayers,
      [teamName]: event.target.value,
    });
  };

  const handleAddPlayer = (event, teamName) => {
    event.preventDefault();
    const playerName = teamPlayers[teamName].trim();
    if (playerName) {
      updateTeamPlayers(teamName, playerName); // Add player to team
      setTeamPlayers({
        ...teamPlayers,
        [teamName]: "", // Clear input field after adding player
      });
    }
  };

  return (
    <div>
      <h2
        className="fw-bold"
        style={{
          fontFamily: "Libre Baskerville",
          color: "#ffffff",
          textShadow: `
              0 0 5px #4682b4,
              0 0 10px #4682b4,
              0 0 20px #4169e1,
              0 0 30px #27496D
              `,
        }}
      >
        Scores:
      </h2>
      <div className="row text-center mb-2">
        {teams.map((team, index) => {
          // Ensure that team.players is an array before mapping over it
          const players = Array.isArray(team.players) ? team.players : [];

          return (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#f0f8ff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p
                  className="fw-bold"
                  style={{
                    fontFamily: "Libre Baskerville",
                    fontSize: "28px",
                    color: "#27496d",
                  }}
                >
                  {team.name}: {team.points} Points
                </p>

                {/* Display players under the team */}
                <div className="mb-3">
                  {players.map((player, playerIndex) => (
                    <p
                      key={playerIndex}
                      className="fw-bold"
                      style={{
                        fontFamily: "Libre Baskerville",
                        color: "#27496d",
                        fontSize: "20px",
                        margin: "0", // Remove default margin
                        paddingBottom: "4px", // Optional: add some space between player names
                      }}
                    >
                      {player.name}
                    </p>
                  ))}
                </div>

                {/* Add Player Section */}
                <div className="mt-3">
                  <form onSubmit={(event) => handleAddPlayer(event, team.name)}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Enter new player..."
                      value={teamPlayers[team.name]}
                      onChange={(event) =>
                        handlePlayerNameChange(event, team.name)
                      }
                    />
                    <button type="submit" className="btn btn-primary w-100">
                      Add Player
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scores;
