import React, { useState } from "react";

function Scores({ teams, updateTeamPlayers }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [newPlayerName, setNewPlayerName] = useState({}); // Tracks new player names by team

  const handleNameClick = (teamIndex, playerIndex) => {
    setEditingIndex({ teamIndex, playerIndex });
    setEditedName(teams[teamIndex].players[playerIndex].name);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleNameSave = (teamIndex, playerIndex) => {
    if (editedName.trim()) {
      const updatedTeams = [...teams];
      updatedTeams[teamIndex].players[playerIndex].name = editedName.trim();
      updateTeamPlayers(updatedTeams);
      setEditingIndex(null);
      setEditedName("");
    }
  };

  const handleNewPlayerChange = (event, teamIndex) => {
    setNewPlayerName((prev) => ({
      ...prev,
      [teamIndex]: event.target.value,
    }));
  };

  const handleAddPlayer = (teamIndex) => {
    const playerName = newPlayerName[teamIndex]?.trim();
    if (playerName) {
      const updatedTeams = [...teams];
      updatedTeams[teamIndex].players.push({ name: playerName });
      updateTeamPlayers(updatedTeams);
      setNewPlayerName((prev) => ({ ...prev, [teamIndex]: "" })); // Reset input field
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
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="col-6 col-md-4 col-lg-3 mb-4">
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
              <div className="mb-3">
                {team.players.map((player, playerIndex) => (
                  <p
                    key={playerIndex}
                    className="fw-bold"
                    style={{
                      fontFamily: "Libre Baskerville",
                      color: "#27496d",
                      fontSize: "20px",
                      margin: "0",
                      paddingBottom: "2px",
                    }}
                  >
                    {editingIndex &&
                    editingIndex.teamIndex === teamIndex &&
                    editingIndex.playerIndex === playerIndex ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={handleNameChange}
                        onBlur={() =>
                          handleNameSave(teamIndex, playerIndex)
                        }
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleNameSave(teamIndex, playerIndex);
                          }
                        }}
                        className="form-control"
                        autoFocus
                      />
                    ) : (
                      <span onClick={() => handleNameClick(teamIndex, playerIndex)}>
                        {player.name}
                      </span>
                    )}
                  </p>
                ))}
              </div>
              {/* Add New Player Section */}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter new player..."
                  value={newPlayerName[teamIndex] || ""}
                  onChange={(event) => handleNewPlayerChange(event, teamIndex)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleAddPlayer(teamIndex);
                    }
                  }}
                  className="form-control mb-2"
                />
                <button
                  onClick={() => handleAddPlayer(teamIndex)}
                  className="btn btn-primary w-100"
                >
                  Add Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scores;
