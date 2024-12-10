import React, { useState } from "react";

function TeamManagement({ teams, updateTeamPlayers }) {
  const [playerName, setPlayerName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("Team 1");

  const handlePlayerNameChange = (event) => setPlayerName(event.target.value);

  const handleTeamChange = (event) => setSelectedTeam(event.target.value);

  const handleAddPlayer = (event) => {
    event.preventDefault();
    if (playerName.trim()) {
      updateTeamPlayers(selectedTeam, playerName);
      setPlayerName("");
    }
  };

  return (
    <div className="mb-4">
      <h3>Add Player to a Team</h3>
      <form onSubmit={handleAddPlayer}>
        <div className="mb-3">
          <label htmlFor="teamSelect" className="form-label">Select Team</label>
          <select
            id="teamSelect"
            className="form-select"
            value={selectedTeam}
            onChange={handleTeamChange}
          >
            {Object.keys(teams).map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="playerName" className="form-label">Player Name</label>
          <input
            type="text"
            id="playerName"
            className="form-control"
            value={playerName}
            onChange={handlePlayerNameChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Player</button>
      </form>
    </div>
  );
}

export default TeamManagement;
