import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import QnA from '../components/QnA/QnA';
import { userStore } from '../stores/userStore';
import { useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { idStore } from '../stores/id';

type Question = {
  question_text: string;
};

type Answer = {
  num: number;
  content: string;
};

export default function DetailPage() {
  const { nickName, setNickName } = userStore();
  const [img, setImg] = useState('');
  const [anick, setAnick] = useState();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { detailId, setDetailId } = idStore();

  const getDetails = async () => {
    try {
      const response = await baseInstance.get(`/characters/${detailId}`);

      // setNickName(response.data.nick_name);
      setQuestions(response.data.questions);
      setAnswers(response.data.answers);
      setImg(response.data.result_url);
      setAnick(response.data.nick_name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <BoxContainer title={`${anick}님이 생각한 ${nickName}의 모습이에요`}>
      <HorizontalLine />
      <Layout>
        <CardLayout>
          <FlipCard imageURL={img} keywords={answers} />
        </CardLayout>
        {questions.map((question: Question, index: number) => (
          <QnA
            key={index}
            question={question.question_text}
            answer={answers[index]?.content}
          />
        ))}
      </Layout>
    </BoxContainer>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardLayout = styled.div`
  margin: 3rem;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
`;
