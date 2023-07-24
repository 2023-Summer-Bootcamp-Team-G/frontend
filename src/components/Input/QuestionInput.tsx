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
    const updatedInputs = [...inputs]; //상태를 직접 변경하는건 안 좋다 들음, 복사해서 사용하는 이유
    updatedInputs[index] = value; //인덱스 별로 값을 집어 넣어주려고
    setInputs(updatedInputs); //업데이트란 배열을 인풋상태변경함수에 넣어줌으로써 인풋상태 변경
  };

  //useEffect사용 이유 : 변경함수의 늦게 처리되는걸 막기위해
  useEffect(() => {
    setValue([...value1, ...inputs]); // 프롭스로 받아온 밸류1 + 인풋값들(즉, 추가 질문들)
  }, [inputs]); //맨 마지막 대괄호 안에 상태를 집어넣으면, 상태가 변경되면 위에 코드 실행해달란 뜻
  //두번째 파라미터에로 []을 넣으면 컴포넌트 마운트시 1회 실행하고 다신 실행하지 않음

  return (
    <>
      {questions.map((index) => (
        <Input
          key={index}
          value={inputs[index]} //반복문 내에서 구분을 할 수 있게 inputs배열에서 인덱스로 순서대로 가져옴
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
