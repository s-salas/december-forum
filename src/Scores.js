import React from "react";

function Scores({ players }) {
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
        {players.map((player, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            {" "}
            {/* Adjust the column sizes as needed */}
            <p
              className="player fw-bold"
              style={{
                fontFamily: "Libre Baskerville",
                fontSize: "32px",
                color: "#27496d",
              }}
            >
              {player.name}: {player.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scores;
