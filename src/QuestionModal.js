import React, { useState } from "react";
import Timer from "./Timer"; // Or the appropriate path

const QuestionModal = ({
  category,
  points,
  question,
  answer,
  onClose,
  teams,
  updateTeamPoints,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const addPoints = (teamName, points) => {
    if (teamName) {
      // Update points for the selected team
      updateTeamPoints(teamName, points);
      onClose();
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div
        className="modal-dialog"
        role="document"
        style={{
          maxWidth: "50%",
          width: "100%",
          marginTop: "70px"
        }}
      >
        <div
          className="modal-content"
          style={{
            backgroundColor: "#4682b4",
            border: "2px solid #27496d",
            borderRadius: "8px",
          }}
        >
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5
              className="modal-title fw-semibold"
              style={{
                fontFamily: "Libre Baskerville",
                fontSize: "32px",
                color: "#ffffff",
              }}
            >
              {category} for {points} points
            </h5>
            <button
              type="button"
              className="btn fw-semibold"
              style={{
                backgroundColor: "#4682b4",
                color: "#ffffff",
                fontFamily: "Libre Baskerville",
                fontSize: "24px",
              }}
              onClick={onClose}
            >
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body">
            {/* Only show the question if showAnswer is false */}
            {!showAnswer && (
              <div>
                {typeof question === "string" ? (
                  <p
                    style={{
                      fontFamily: "Libre Baskerville",
                      fontSize: "28px",
                      color: "#ffffff",
                    }}
                  >
                    {question}
                  </p>
                ) : question.image ? (
                  <img
                    src={question.image}
                    alt="Question visual"
                    className="question-image mb-2"
                    style={{ 
                      maxWidth: "600px", 
                      width: "100%",
                      display: "block",  // Makes the image a block element
      margin: "0 auto"   // Centers the image horizontally
                    }}
                  />
                ) : (
                  <div>
                    <p
                      className="fs-4"
                      style={{
                        fontFamily: "Libre Baskerville",
                        fontSize: "28px",
                      }}
                    >
                      {question.question}
                    </p>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                      {question.choices.map((choice, index) => (
                        <li
                          style={{ fontFamily: "Libre Baskerville", fontSize: "28px" }}
                          key={index}
                        >
                          {choice}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Show the answer when showAnswer is true */}
            {showAnswer && (
  <div>
    {Array.isArray(answer) ? (
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: 0,
          fontFamily: "Libre Baskerville",
          fontSize: "28px",
          color: "#ffffff",
        }}
      >
        {answer.map((ans, index) => (
          <li key={index}>
            {ans.split("\n").map((line, lineIndex) => (
              <p key={lineIndex} style={{ whiteSpace: "pre-wrap" }}>
                {line}
              </p>
            ))}
          </li>
        ))}
      </ul>
    ) : typeof answer === "object" && answer.image ? (
      <img
        src={answer.image}
        alt="Answer visual"
        className="answer-image mb-2"
        style={{ 
          maxWidth: "600px", 
          width: "100%",
          display: "block",  // Makes the image a block element
          margin: "0 auto"   // Centers the image horizontally
           }}
      />
    ) : (
      <p
        className="text-center mt-5 mb-5"
        style={{
          fontFamily: "Libre Baskerville",
          fontSize: "28px",
          color: "#ffffff",
          whiteSpace: "pre-wrap"
        }}
      >
        {answer}
      </p>
    )}
  </div>

            )}

            {/* Team buttons to add points */}
            <div className="ms-auto">
              {showAnswer && (
                <div>
                  {teams.map((team, index) => (
                    <button
                      key={index}
                      className="btn btn-dark mx-1"
                      style={{
                        fontFamily: "Libre Baskerville",
                        fontSize: "20px",
                      }}
                      onClick={() => addPoints(team.name, points)} // Pass correct team name and points
                    >
                      {team.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-footer d-flex">
              {!showAnswer && <Timer />}
              <div className="ms-auto">
                {!showAnswer && (
                  <button
                    className="btn fw-semibold"
                    style={{
                      backgroundColor: "#27496d",
                      color: "#ffffff",
                      fontFamily: "Libre Baskerville",
                      fontSize: "20px",
                      marginTop: "26px",
                    }}
                    onClick={handleShowAnswer}
                  >
                    Show Answer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
