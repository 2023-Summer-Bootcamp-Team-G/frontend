import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  value1: any;
  setValue: any;
};

export default function QuestionInput({ value1, setValue }: Props) {
  const [questions, setQuestions] = useState<number[]>([]);
  const [inputs, setInputs] = useState<string[]>([]);

  //여기서부터 반복문 속 인풋 관리
  const addQuestion = () => {
    if (questions.length < 4) {
      setQuestions([...questions, questions.length]);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  //useEffect사용 이유 : 변경함수의 늦게 처리되는걸 막기위해
  useEffect(() => {
    setValue([...value1, ...inputs]);
  }, [inputs]);

  return (
    <>
      {questions.map((questionId, index) => (
        <Input
          key={index}
          value={inputs[index]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
        />
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
