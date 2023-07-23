import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import QuestionInput from '../components/Input/QuestionInput';
import RoundButton from '../components/Btn/RoundBtn';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { usePollIdStore } from '../stores/pollId';
import { userStore } from '../stores/userStore';

export default function QuestionPage() {
  const initQuestions = [
    '나를 동물로 표현한다면 어떤 동물이야?',
    '난 어떤 분위기야?',
    '나를 색으로 표현한다면 무슨 색이야?',
    '나는 어떤 그림체가 어울려?',
    '내가 자주 들고다니는 물건은 뭐야?',
    '내가 자주 나타나는 장소는 어디야?',
  ];
  const initQuestionSrc = [
    'https://i.postimg.cc/BZHxwHHJ/bear.png',
    'https://i.postimg.cc/ydvzVkSx/emoji-smiling-face-with-sunglasses.png',
    'https://i.postimg.cc/LX4r020p/image-9.png',
    'https://i.postimg.cc/yYqz74DF/image-10.png',
    'https://i.postimg.cc/qBWpg656/emoji-books.png',
    'https://i.postimg.cc/sX2N4Kvf/emoji-house-with-garden.png',
  ];
  const [questions, setQuestions] = useState(initQuestions);
  const [addQ, setAddQ] = useState(initQuestions); // 고정 + 추가 질문 하나로 모인 배열
  const navigate = useNavigate();
  const { setPollId } = usePollIdStore();
  const { userId } = userStore();

  const createQuestion = async () => {
    const data = { user_id: userId, questions: addQ };

    const response = await baseInstance.post('/questions', data);

    setPollId(response.data.poll_id); // 꺼내온거 사용

    if (response.status === 201) navigate('/answerroom');
  };
  console.log(userId);
  return (
    <BoxContainer
      title={`본인에 대한 질문을 만들어주세요!
                  사람들이 답해줄거에요.
              `}
    >
      <HorizontalLine />
      <Text>기본 질문</Text>
      <CardLayout>
        {questions.map((arr, index) => (
          <QuestionCard
            key={index} //key속성 추가해주는 이유가 리액트가 key값을 보고 각각 구분할 수 있게 해주려고. 없으면 워닝 띄움
            question={initQuestions[index]}
            src={initQuestionSrc[index]}
          />
        ))}
      </CardLayout>

      <TextLayout>
        <Text>추가 질문</Text>
        <Text2>질문은 4개까지 추가할 수 있어요.</Text2>
      </TextLayout>

      <QuestionLayout>
        <QuestionInput value1={initQuestions} setValue={setAddQ} />
        <br />

        <RoundButton onClick={createQuestion} title={'다음 페이지'} />
      </QuestionLayout>
    </BoxContainer>
  );
}

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-bottom: 3rem;
`;
const CardLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.25rem 1.25rem;
  width: 75rem;
  flex-wrap: wrap;
`;
const TextLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
const Text = styled.div`
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  margin-left: 3.31rem;
  margin-bottom: 2rem;
`;
const Text2 = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  padding: 0.78rem 0 0 1.25rem;
`;
const QuestionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
