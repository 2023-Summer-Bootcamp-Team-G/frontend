import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

type TextProps = {
  question: string;
  placeholder: string;
};

export default function AnswerInput({ question, placeholder }: TextProps) {
  return (
    <AnswerInputLayout>
      <Label>{question}</Label>
      <Input placeholder={placeholder}></Input>
    </AnswerInputLayout>
  );
}

// type TextProps = {
//   values: any;
//   setValues: any;
// };

// export default function AnswerInput({ values, setValues }: TextProps) {
//   const [questions, setQuestions] = useState<number[]>([]);
//   const [inputs, setInputs] = useState<string[]>([]);

//   const handleInputChange = (index: number, value: string) => {
//     const updatedInputs = [...inputs];
//     updatedInputs[index] = value;
//     setInputs(updatedInputs);
//   };

//   useEffect(() => {
//     setValues([...values, ...inputs]);
//   }, [inputs]);

//   return (
//     <AnswerInputLayout>
//       <Label>{}</Label>
//       {questions.map((questionId, index) => (
//         <Input
//           key={index}
//           value={inputs[index]} //반복문 내에서 구분을 할 수 있게 inputs배열에서 인덱스로 순서대로 가져옴
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             handleInputChange(index, e.target.value)
//           }
//         />
//       ))}
//     </AnswerInputLayout>
//   );
// }

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
