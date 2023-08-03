import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import QnA from '../components/QnA/QnA';
import { userStore } from '../stores/userStore';
import { useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { idStore } from '../stores/id';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/Container';
import { color } from 'highcharts';
import { width } from '@mui/system';

export default function DetailPage() {
  const { nickName } = userStore();
  const [img, setImg] = useState('');
  const [anick, setAnick] = useState<string>('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const { detailId } = idStore();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const getDetails = async () => {
    try {
      const response = await baseInstance.get(`/characters/${detailId}`);
      // setNickName(response.data.nick_name);

      setQuestions(response.data.questions);
      setAnswers(response.data.answers);
      setKeyword(response.data.keyword);
      setImg(response.data.result_url);
      setAnick(response.data.nick_name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const downloadImage = () => {
    // 이미지 다운로드 로직 구현
    const link = document.createElement('a'); // 새로운 anchor 엘리먼트 생성
    link.href = img; // 이미지 URL 설정 (img 변수에 저장된 이미지 URL 사용)

    const fileName = 'downloaded_image.jpg'; // 다운로드될 파일 이름 (확장자명 포함)
    link.download = fileName; // 다운로드될 파일 이름 설정

    document.body.appendChild(link); // anchor 엘리먼트를 body에 추가
    link.click(); // 클릭 이벤트 발생시켜 다운로드 실행

    // anchor 엘리먼트를 추가하고 삭제하여 메모리 누수 방지
    document.body.removeChild(link);
  };

  return (
    <Container>
      <DownloadButton
        onClick={downloadImage}
        style={{
          background: '#222222',
          width: '2.8rem',
          height: '2.8rem',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          className='material-symbols-rounded'
          style={{ fontSize: '2rem', color: 'white' }}
        >
          download
        </span>
      </DownloadButton>
      <CloseButton onClick={goBack}>
        <span
          style={{ position: 'absolute' }}
          className='material-symbols-rounded'
        >
          close
        </span>
      </CloseButton>
      <BoxContainer title={`${anick}님이 생각한 ${nickName}의 모습이에요`}>
        <HorizontalLine />
        <Layout>
          <CardLayout>
            <FlipCard imageURL={img} keywords={keyword} />
          </CardLayout>
          <br />
          <br />
          {questions.map((question: string, index: number) => (
            <QnA key={index} question={question} answer={answers[index]} />
          ))}
        </Layout>
      </BoxContainer>
    </Container>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardLayout = styled.div`
  margin: 3rem 3rem 5rem 3rem;
`;

const HorizontalLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-left: 3.5rem;
`;
const CloseButton = styled.button`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 14rem;
  top: 6.5rem;
  cursor: pointer;
`;

const DownloadButton = styled.button`
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 46rem;
  top: 38.5rem;
  cursor: pointer;
`;
