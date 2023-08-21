import { useState } from 'react';
import './App.css';

const questionsList = [
  {
    question: "HTML Stands For _______",
    answer: "Hyper Text Markup Language",
    options:[
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
    ]
},
{
    question: "What does CSS stand for _______",
    answer: "Cascading Style Sheet",
    options:[
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
    ]
},
{
    question: "What does SQL stand for _______",
    answer: "Structured Query Language",
    options:[
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
    ]
},
{
    question: "What does PHP stand for _______",
    answer: "Hypertext Preprocessor",
    options:[
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
    ]
},
{
    question: "What does XML stand for _______",
    answer: "eXtensible Markup Language",
    options:[
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
    ]
},
];

function App() {
  const [indexVal, setIndexVal] = useState(0);
  const [marks, setMarks] = useState(0);
  const [completed, setCompleted] = useState(false);

  const renderQuestion = () => {
    if (completed) {
      return (
        <div className="quiz-container">
          <div className="quiz-result">
            <p>Congratulations! Quiz Completed.</p>
            <p>Your Total Marks: {marks}</p>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </div>
        </div>
      );
    }

    const que = questionsList[indexVal];
    return (
      <div className="quiz-container">
        <div className="quiz-question">
          <p>{que.question}</p>
          <div className="quiz-options">
            {que.options.map((option, i) => (
              <button
                key={i}
                onClick={() => checkAnswer(que.answer, option)}
                className="quiz-option"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const nextQue = () => {
    if (indexVal + 1 < questionsList.length) {
      setIndexVal(indexVal + 1);
    } else {
      setCompleted(true);
    }
  };

  const restartQuiz = () => {
    setIndexVal(0);
    setMarks(0);
    setCompleted(false);
  };

  const checkAnswer = (answer, selectedOption) => {
    if (answer === selectedOption) {
      setMarks(marks + 1);
    }
    nextQue();
  };

  return (
    <div className="App">
      {renderQuestion()}
    </div>
  );
}

export default App;
