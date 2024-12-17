import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [isClicked, setIsClicked] = useState(null);
  const [indexValue, setIndex] = useState(null);
  function handleClick(currIndex) {
    console.log("current Index--->", currIndex);

    setIsClicked((click) => !click);
    setIndex(currIndex);
  }
  return (
    <>
      <div className="flashcards">
        {questions.map((item, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`${isClicked && index === indexValue ? "selected" : ""}`}
            key={index}
          >
            {isClicked && index === indexValue ? item.answer : item.question}
          </div>
        ))}
      </div>
    </>
  );
}
