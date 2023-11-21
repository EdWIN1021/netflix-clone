import React from "react";
import Container from "../Container";
import GetStartedForm from "./GetStartedForm";
import Questions from "./Questions";

const QuestionSection = () => {
  return (
    <Container>
      <div className="mx-auto max-w-[1250px]">
        <h2 className="text-center text-[2rem] font-bold lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <Questions />

        <div className="mt-11">
          <GetStartedForm />
        </div>
      </div>
    </Container>
  );
};

export default QuestionSection;
