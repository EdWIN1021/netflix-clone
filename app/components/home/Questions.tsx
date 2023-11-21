"use client";

import { useState } from "react";
import Question from "./Question";
import { questions as initialData } from "../../constants";

const Questions = () => {
  const [questions, setQuestions] = useState(initialData);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const toggleQuestion = (title: string) => {
    if (title === currentQuestion) {
      setQuestions(
        questions?.map((question) => {
          if (question?.title === title) {
            return { ...question, toggle: !question?.toggle };
          } else {
            return { ...question };
          }
        }),
      );
    } else {
      setQuestions(
        questions?.map((question) => {
          if (question?.title !== title) {
            return { ...question, toggle: false };
          } else {
            return { ...question, toggle: true };
          }
        }),
      );
    }

    setCurrentQuestion(title);
  };

  return (
    <ul className="mt-6 text-lg lg:text-2xl">
      {questions.map((question) => (
        <Question
          key={question.title}
          question={question}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </ul>
  );
};

export default Questions;
