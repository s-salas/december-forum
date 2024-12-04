import React, { useState } from "react";
import QuestionModal from "./QuestionModal";
import SetUpBoard from "./SetUpBoard";
import SetUpPlayers from "./SetUpPlayers";
import Scores from "./Scores";
import { categories, questions, answers } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentPoints, setCurrentPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [players, setPlayers] = useState([]);

  const handleShowModal = (catIndex, points, questionId) => {
    if (
      catIndex < categories.length &&
      questionId < questions[catIndex].length
    ) {
      setCurrentCategory(categories[catIndex]);
      setCurrentPoints(points);
      setCurrentQuestion(questions[catIndex][questionId]);
      setCurrentAnswer(answers[catIndex][questionId]);
      setShowModal(true);
    } else {
      console.error("Invalid index values provided to handleShowModal");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers);
  };

  const updatePlayerPoints = (playerName) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? { ...player, points: player.points + currentPoints }
          : player
      )
    );
  };

  return (
    <div className="container mt-5">

      <SetUpBoard
        categories={categories}
        questions={questions}
        onQuestionClick={handleShowModal}
      />

      {showModal && (
        <QuestionModal
          category={currentCategory}
          points={currentPoints}
          question={currentQuestion}
          answer={currentAnswer}
          onClose={handleCloseModal}
          players={players}
          updatePlayerPoints={updatePlayerPoints}
        />
      )}

      <Scores players={players} />
      <SetUpPlayers updatePlayers={updatePlayers} />
    </div>
  );
};

export default App;
