import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import QnA from '../components/QnA/QnA';
import { userStore } from '../stores/userStore';
import { useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { idStore } from '../stores/id';

export default function DetailPage() {
  const { nickName } = userStore();
  const [img, setImg] = useState('');
  const [anick, setAnick] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const { detailId } = idStore();

  const getDetails = async () => {
    try {
      const response = await baseInstance.get(`/characters/${detailId}`);
      // setNickName(response.data.nick_name);

      setQuestions(response.data.questions);
      setAnswers(response.data.answers);
      setKeyword(response.data.keyword);
      setImg(response.data.result_url);
      setAnick(response.data.nick_name);
      console.log('test' + response.data.nick_name);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(keyword);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <BoxContainer title={`${anick}님이 생각한 ${nickName}의 모습이에요`}>
      <HorizontalLine />
      <Layout>
        <CardLayout>
          <FlipCard imageURL={img} keywords={keyword} />
        </CardLayout>
        {questions.map((question: string, index: number) => (
          <QnA key={index} question={question} answer={answers[index]} />
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
