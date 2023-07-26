import { styled } from 'styled-components';

type TextProps = {
  question: string;
  answer: string;
};

export default function QnA({ question, answer }: TextProps) {
  return (
    <AnswerInputLayout>
      <Label>{question}</Label>
      <Answer>{answer}</Answer>
    </AnswerInputLayout>
  );
}

const AnswerInputLayout = styled.div`
  margin-left: 2rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  color: #2c2c2c;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  white-space: pre-line;
  margin-bottom: 1.3rem;
  display: flex;
`;

const Answer = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  width: 62.5rem;
  height: 4.5rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  color: black;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  margin-left: 1.5rem;
  padding-left: 1.55rem;
`;
