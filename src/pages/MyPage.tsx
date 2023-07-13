import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import Button from '../components/Btn/Btn';
import CharBox from '../components/CharBox/CharBox';
import Tab from '@mui/material/Tab';
import BasicTabs from '../components/Tab/tab';

export default function MyPage() {
  return (
    <BoxContainer title={''}>
      <Top>
        <CharLayout>
          <Title>“팀 G” 님 본인이 만든 캐릭터에요!</Title>
          <FlipCardLayout>
            <FlipCard />
          </FlipCardLayout>
          <Button title={'캐릭터 다시 만들래요'} />
        </CharLayout>

        <CharLayout>
          <Title>중복된 키워드로 만든 “팀 G” 님이에요!</Title>
          <FlipCardLayout>
            <FlipCard />
          </FlipCardLayout>
          <Button title={'중복 캐릭터 다시 만들기'} />
        </CharLayout>
      </Top>

      <HorizontalLine />
      <BasicTabs />
    </BoxContainer>
  );
}
const Top = styled.div`
  display: flex;
  padding: 0 4rem;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

const CharLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 1.56rem;
`;

const FlipCardLayout = styled.div`
  margin-bottom: 2.5rem;
`;

const HorizontalLine = styled.div`
  width: 75rem;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
`;
