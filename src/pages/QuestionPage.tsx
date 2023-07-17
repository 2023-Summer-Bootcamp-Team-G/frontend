import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import QuestionInput from '../components/Input/QuestionInput';
import RoundButton from '../components/Btn/RoundBtn';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  const [addQ, setAddQ] = useState(['']);
  console.log(`page` + addQ);
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
        <QuestionInput value={initQuestions} setValue={setAddQ} />
        <br />
        <Link to='/answerroom'>
          <RoundButton title={'다음 페이지'} />
        </Link>
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
