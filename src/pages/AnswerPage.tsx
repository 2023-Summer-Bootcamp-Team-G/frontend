import { styled } from 'styled-components';
import AnswerInput from '../components/Input/AnswerInput';
import RoundButton from '../components/Btn/RoundBtn';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { Link, useNavigate } from 'react-router-dom';
import { baseInstance } from '../apis/config';
import { useEffect, useState } from 'react';

export default function AnswerPage() {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState<string[]>([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/questionroom');
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
  const createChar = async () => {
    const json = { poll_id: 36, creatorName: 'test', answers: value };

    const response = await baseInstance.post('/characters/', json);
    if (response.status === 201) navigate('/result');
    console.log(response.data);
  };
  return (
    <BoxContainer
      title={`질문에 답변을 달아주세요!
            답변을 기반으로 캐릭터를 만들어드릴게요.
          `}
    >
      <HorizontalLine />
      {questions.map(
        (questionTitle: any, index: number) => (
          console.log('test' + index),
          (
            <AnswerInput
              key={index}
              id={index}
              question={questionTitle}
              placeholder={''}
              value={value}
              setValue={setValue}
            />
          )
        )
      )}

      <RButtonLayout>
        <RoundButton title={'이전 페이지'} onClick={goBack} />
        <RoundButton title={'캐릭터 생성'} onClick={createChar} />
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
