import { useState } from 'react';
import { styled } from 'styled-components';

export default function QuestionInput() {
  const [questions, setQuestions] = useState<number[]>([]);

  const addQuestion = () => {
    if (questions.length < 4) {
      setQuestions([...questions, questions.length]);
    }
  };

  return (
    <>
      {questions.map((questionId) => (
        <Input key={questionId} />
      ))}
      <Button onClick={addQuestion}>
        <span className='material-symbols-rounded'>add_circle</span>
      </Button>
    </>
  );
}

const Button = styled.button`
  width: 62.5rem;
  height: 4.5rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  padding-left: 0.81rem;
  text-align: center;

  margin-bottom: 1rem; //걍 테스트하면서 보려고
`;
const Input = styled.input`
  all: unset;
  width: 62.5rem;
  height: 4.5rem;
  padding-left: 0.81rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  &:not(:last-child) {
    margin-bottom: 1.23rem;
  }
`;
