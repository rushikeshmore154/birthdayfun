import React, { useState } from 'react';
import './QuestionCard.css';

function QuestionCard({ question, onAnswerCorrect }) {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (answer.toLowerCase() === question.correctAnswer.toLowerCase()) {
            setAnswer('');
            onAnswerCorrect(); // Move to next question
        } else {
            alert(question.hint);
            setAnswer('');
        }
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="question-no">Question {question.id}</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="answer">{question.text}</label>
                    <input
                        type="text"
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder={question.placeholder}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default QuestionCard;
