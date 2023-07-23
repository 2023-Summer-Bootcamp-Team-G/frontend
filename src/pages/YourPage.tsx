import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import CharBox from '../components/CharBox/CharBox';
import Tab from '@mui/material/Tab';
import BasicTabs from '../components/Tab/Tab';
import { useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { userStore } from '../stores/userStore';

interface Character {
  id: number;
  result_url: string;
  nick_name: string;
}

export default function YourPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { userId } = userStore();

  const getChar = async () => {
    try {
      const response = await baseInstance.get('/characters/', {
        params: {
          user_id: userId, //꺼내온거 사용
        },
      });

      setCharacters(response.data.characters);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChar();
  }, []);

  return (
    <BoxContainer title={''}>
      <Top>
        <CharLayout>
          <Title>“팀 G” 님 본인이 만든 캐릭터에요!</Title>
          <FlipCardLayout>
            <FlipCard imageURL={characters[0]?.result_url} />{' '}
            {/* 첫 번째 만들어진 캐릭터의 이미지를 FlipCard 컴포넌트에 전달 */}
          </FlipCardLayout>
        </CharLayout>

        <CharLayout>
          <Title>중복된 키워드로 만든 “팀 G” 님이에요!</Title>
          <FlipCardLayout>
            <FlipCard imageURL='' />
          </FlipCardLayout>
        </CharLayout>
      </Top>

      <HorizontalLine />
      <BasicTabs onSubmit={getChar} />
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
