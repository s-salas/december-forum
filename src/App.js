import React, { useState } from "react";
import QuestionModal from "./QuestionModal";
import SetUpBoard from "./SetUpBoard";
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
  const [teams, setTeams] = useState([
    { name: "Team 1", points: 0, players: [] },
    { name: "Team 2", points: 0, players: [] },
    { name: "Team 3", points: 0, players: [] },
    { name: "Team 4", points: 0, players: [] },
  ]);

  // Handle opening modal with relevant question data
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

  // Handle closing modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateTeamPlayers = (teamName, playerName) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => {
        if (team.name === teamName) {
          return {
            ...team,
            players: [...(team.players || []), { name: playerName, points: 0 }],
          };
        }
        return team;
      })
    );
  };

  const updateTeamPoints = (teamName, points) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.name === teamName
          ? { ...team, points: team.points + points }
          : team
      )
    );
  };

  return (
    <div className="container mt-5">
      {/* Set up the board with categories and questions */}
      <SetUpBoard
        categories={categories}
        questions={questions}
        onQuestionClick={handleShowModal}
      />

      {/* Modal to display question */}
      {showModal && (
        <QuestionModal
          category={currentCategory}
          points={currentPoints}
          question={currentQuestion}
          answer={currentAnswer}
          onClose={handleCloseModal}
          teams={teams}
          updateTeamPoints={updateTeamPoints}
        />
      )}

      {/* Display scores */}
      <Scores teams={teams} updateTeamPlayers={updateTeamPlayers} />
    </div>
  );
};

export default App;
