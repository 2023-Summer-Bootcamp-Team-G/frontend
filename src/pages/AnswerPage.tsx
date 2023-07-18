import { styled } from 'styled-components';
import AnswerInput from '../components/Input/AnswerInput';
import RoundButton from '../components/Btn/RoundBtn';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { Link } from 'react-router-dom';
import { baseInstance } from '../apis/config';
import { useEffect, useState } from 'react';

export default function AnswerPage() {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState([]);
  const [inputs, setInputs] = useState<string[]>([]);

  const getQuestions = async () => {
    const response = await baseInstance.get('/question');
    setQuestions(response.data.questions);
  };

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await baseInstance.get('/question/?poll_id=34');
        console.log(response.data);
        setQuestions(response.data.questions);
      } catch (error) {
        console.error(error);
      }
    };

    getQuestions();
  }, []);

  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs]; //상태를 직접 변경하는건 안 좋다 들음, 복사해서 사용하는 이유
    updatedInputs[index] = value; //인덱스 별로 값을 집어 넣어주려고
    setInputs(updatedInputs); //업데이트란 배열을 인풋상태변경함수에 넣어줌으로써 인풋상태 변경
  };
  return (
    <BoxContainer
      title={`질문에 답변을 달아주세요!
            답변을 기반으로 캐릭터를 만들어드릴게요.
          `}
    >
      <HorizontalLine />

      {questions.map((questionTitle: any, index: any) => (
        <AnswerInput
          key={index}
          question={questionTitle}
          placeholder={''}
          onChange={(e: React.ChangeEvent<HTMLAreaElement>) =>
            handleInputChange(index, e.target.value)
          }
        />
      ))}

      <RButtonLayout>
        <RoundButton title={'이전 페이지'} />
        <Link to='/result'>
          <RoundButton title={'캐릭터 생성'} />
        </Link>
      </RButtonLayout>
    </BoxContainer>
  );
}

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
`;

const RButtonLayout = styled.div`
  display: flex;
  justify-content: center;
`;
