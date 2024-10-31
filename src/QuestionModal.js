import React, { useState } from "react";
import PropTypes from "prop-types";
import "./QuestionModal.css";

const QuestionModal = ({
  category,
  points,
  question,
  answer,
  onClose,
  players,
  updatePlayerPoints,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const addPoints = (playerName) => {
    updatePlayerPoints(playerName);
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div 
        className="modal-dialog" 
        role="document"
        style={{ maxWidth: "50%", width: "100%" }}
      >
        <div 
          className="modal-content"
          style={{ backgroundColor: "rgb(218, 113, 0)" }}
        >
          <div className="modal-header">
            <h5 className="modal-title" style={{ fontFamily: "Metal Mania", fontSize: "32px" }}>
              {category} for {points} points
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Only show the question if showAnswer is false */}
            {!showAnswer && (
              <div>
                {typeof question === "string" ? (
                  <p className="fs-4 fw-semibold" style={{ fontFamily: "Arial" }}>{question}</p>
                ) : question.image ? (
                  <img
                    src={question.image}
                    alt="Question visual"
                    className="question-image mb-2"
                  />
                ) : (
                  <div>
                    <p className="fs-4 fw-semibold" style={{ fontFamily: "Arial" }}>{question.question}</p>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                      {question.choices.map((choice, index) => (
                        <li className="fs-4 fw-semibold" style={{ fontFamily: "Arial" }} key={index}>{choice}</li>
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
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {answer.map((ans, index) => (
                      <li key={index}>{ans}</li>
                    ))}
                  </ul>
                ) : typeof answer === "object" && answer.image ? (
                  <img src={answer.image} alt="Answer visual" className="answer-image mb-2" />
                ) : (
                  <p className="fs-3 fw-semibold text-center mt-5 mb-5" style={{ fontFamily: "Arial" }}>{answer}</p>
                )}
              </div>
            )}

            {/* Player buttons to add points */}
            {showAnswer && (
              <div>
                {players.map((player, index) => (
                  <button
                    key={index}
                    className="btn btn-dark mx-1"
                    onClick={() => addPoints(player.name)}
                  >
                    {player.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            {!showAnswer && (
              <button className="btn btn-dark" onClick={handleShowAnswer}>
                Show Answer
              </button>
            )}
            <button className="btn btn-dark" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuestionModal.propTypes = {
  category: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  question: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ image: PropTypes.string }),
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ]).isRequired,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.shape({ image: PropTypes.string }), // Ensure this matches your data structure
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    })
  ).isRequired,
  updatePlayerPoints: PropTypes.func.isRequired,
};

export default QuestionModal;
