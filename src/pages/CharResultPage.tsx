import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import RoundButton from '../components/Btn/RoundBtn';
import { Link } from 'react-router-dom';

export default function CharResultPage() {
  return (
    <BoxContainer title={`내가 생각한 "*"의 모습이에요!`}>
      <HorizontalLine />
      <CardLayout>
        <FlipCard />
      </CardLayout>
      <BtnLayout>
        <RoundButton title={'친구에게 질문 링크 보내기'} />
        <Link to='/mypage'>
          <RoundButton title={'MY PAGE로 이동'} />
        </Link>
      </BtnLayout>
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
  margin-bottom: 5.88rem;
  align-items: center;
  justify-content: center;
`;
const BtnLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
