import { styled } from 'styled-components';
import TextAreaAutoSize from 'react-textarea-autosize';

type TextProps = {
  question: string;
  placeholder: string;
  id: number;
  value: any;
  setValue: any;
};

export default function AnswerInput({
  question,
  id,
  value,
  setValue,
  placeholder,
}: TextProps) {
  const handleInputChange = (id: number, input: string) => {
    const updatedInputs = [...value]; //상태를 직접 변경하는건 안 좋다 들음, 복사해서 사용하는 이유
    updatedInputs[id] = input; //인덱스 별로 값을 집어 넣어주려고
    setValue(updatedInputs); //업데이트란 배열을 인풋상태변경함수에 넣어줌으로써 인풋상태 변경
  };

  return (
    <AnswerInputLayout>
      <Label>{question}</Label>
      <TA
        cacheMeasurements
        value={value[id]}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement> // Update the event type here
        ) => handleInputChange(id, e.target.value)}
        placeholder={placeholder}
      ></TA>
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
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  white-space: pre-line;
  margin-bottom: 1.3rem;
  display: flex;
`;

const TA = styled(TextAreaAutoSize)`
  all: unset;
  display: flex;
  align-items: center;
  width: 55rem;
  min-height: 2.5rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  color: black;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  margin-left: 1.8rem;
  padding-left: 1.55rem;
  padding: 1rem 0.4rem 0.5rem 1.55rem;
  &::placeholder {
    color: silver;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
