import { useState } from "react";
import QuestionCard from "./QuestionCard";

function PracticePage() {
  const [name, setName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Cloudinary video URL
  const videoUrl =
    "https://res.cloudinary.com/dqynztpye/video/upload/v1766836889/Black_Modern_Happy_Birthday_Mobile_Video_gxzmnx.mp4";

  // Array of questions with correct answers and hints
  const questions = [
    {
      id: 1,
      text: "What is your name?",
      placeholder: "Enter your name",
      correctAnswer: "Panda",
      hint: "Are tu bhava :) tu  It's a Prani(jangali)!"
    },
    {
      id: 2,
      text: "What is your avadta khel?",
      placeholder: "Enter your avadta khel",
      correctAnswer: "hatchendu",
      hint: "Tu kar Yedyagat (bhasha) Marathi la visaras !"
    },
    {
      id: 3,
      text: "Sing your song?",
      placeholder: "Enter the song",
      correctAnswer: "Ata Nahi Yene Jane Nusta Varan Bhat Khane",
      hint: "Tu kar Yedyagat, purn lih total 8 akshranchi!"
    }
  ];

  const handleStartQuiz = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("nav tak re pora");
      return;
    }
    setQuizStarted(true);
  };

  const handleAnswerCorrect = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered correctly
      setSubmitted(true);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ color: "green" }}>Birthday Quiz</h2>

      {!quizStarted && !submitted ? (
        <form onSubmit={handleStartQuiz}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
          <button type="submit">Start Quiz</button>
        </form>
      ) : quizStarted && !submitted ? (
        <div>
          <p style={{ marginBottom: "20px" }}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <QuestionCard 
            question={questions[currentQuestionIndex]}
            onAnswerCorrect={handleAnswerCorrect}
          />
        </div>
      ) : (
        <div>
          <h3>Congratulations, {name}! 🎉</h3>
          <p>You answered all questions correctly!</p>
          <p>Here is your video:</p>

          <video width="100%" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default PracticePage;
