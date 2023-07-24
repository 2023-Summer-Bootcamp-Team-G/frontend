import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import QnA from '../components/QnA/QnA';

export default function DetailPage() {
  return (
    <BoxContainer title={`"짱구"님이 생각한 "팀G"의 모습이에요`}>
      <HorizontalLine />
      <Layout>
        <CardLayout>
          <FlipCard imageURL={''} keywords={[]} />
        </CardLayout>

        <QnA
          question='나를 동물로 표현한다면 어떤 동물이야?'
          placeholder='토끼'
        />
        <QnA
          question={`난 어떤 분위기야? 
        (EX. 웃음, 무표정, 화난, 찡그림, 귀여움, 시크, 무심함, 무서움, 발랄함 등등)`}
          placeholder=''
        />
        <QnA question='나를 색으로 표현한다면 무슨 색이야?' placeholder='' />
        <QnA
          question={`나는 어떤 그림체가 어울려?
        (디즈니 애니메이션, 지브리, 픽셀아트, 3D 중에 하나로 골라줘)`}
          placeholder=''
        />
        <QnA question='내가 자주 들고 다니는 물건은 뭐야?' placeholder='' />
        <QnA question='내가 자주 나타나는 장소는 어디야?' placeholder='' />
      </Layout>
    </BoxContainer>
  );
}

// 짱구랑 팀G props로 받아야함
// 키워드 가져오는거
// 기본 질문은 하드코딩으로 넣어놓고ㅡ 추가질문은 가져오기
// 플립카드에 이미지 경로 보내줘야 하고, 태그박스 안에 키워드 가져온거 집어넣어야 하는데;;;

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
