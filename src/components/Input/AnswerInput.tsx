import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

type TextProps = {
  question: string;
  placeholder: string;
  id: number;
  value: any;
  setValue: any;
};

export default function AnswerInput({
  question,
  placeholder,
  id,
  value,
  setValue,
}: TextProps) {
  const handleInputChange = (id: number, input: string) => {
    const updatedInputs = [...value]; //상태를 직접 변경하는건 안 좋다 들음, 복사해서 사용하는 이유
    updatedInputs[id] = input; //인덱스 별로 값을 집어 넣어주려고
    setValue(updatedInputs); //업데이트란 배열을 인풋상태변경함수에 넣어줌으로써 인풋상태 변경
  };
  console.log(id);
  console.log(value);
  return (
    <AnswerInputLayout>
      <Label>{question}</Label>
      <Input
        value={value[id]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(id, e.target.value)
        }
      ></Input>
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

const Input = styled.input`
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
  &::placeholder {
    color: silver;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
