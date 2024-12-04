import React, { useState } from "react";
import PropTypes from "prop-types";

const SetUpBoard = ({ categories, questions, onQuestionClick }) => {
  // State to track which questions have been clicked
  const [clickedQuestions, setClickedQuestions] = useState(
    questions.map(() => Array(questions[0].length).fill(false))
  );

  const handleQuestionClick = (catIndex, questionId) => {
    const points = (questionId + 1) * 100;
    onQuestionClick(catIndex, points, questionId);

    // Update the clicked state for the specific question
    setClickedQuestions((prevState) => {
      const updatedState = [...prevState];
      updatedState[catIndex][questionId] = true;
      return updatedState;
    });
  };

  return (
    <div className="container board">
      {/* Row for categories */}
      <div className="row text-center mb-4">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="col">
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
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {category}
            </h2>
          </div>
        ))}
      </div>

      {/* Rows for questions under each category */}
      {questions[0].map((_, questionId) => (
        <div key={questionId} className="row text-center mb-2">
          {questions.map((_, catIndex) => {
            const points = (questionId + 1) * 100;
            const isClicked = clickedQuestions[catIndex][questionId];

            return (
              <div key={catIndex} className="col">
                <p
                  className="fs-4 mx-0 mb-1 p-2"
                  style={{
                    margin: "0.1rem",
                    backgroundColor: isClicked ? "#696969" : "#4682b4",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => handleQuestionClick(catIndex, questionId)}
                >
                  {points}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

SetUpBoard.propTypes = {
  categories: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  onQuestionClick: PropTypes.func.isRequired,
};

export default SetUpBoard;
