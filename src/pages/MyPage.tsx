import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import Button from '../components/Btn/Btn';
import BasicTabs from '../components/Tab/Tab';
import { baseInstance } from '../apis/config';
import { useEffect, useState } from 'react';
import { userStore } from '../stores/userStore';
import { Link } from 'react-router-dom';
import { linkStore } from '../stores/link';
import { pollStore } from '../stores/poll';

interface Character {
  id: number;
  result_url: string;
  nick_name: string;
}

const setMetaTags = ({
  title = "It's me?!", // 기본 타이틀
  description = '친구들의 답변으로 닮은 캐릭터를 만들어줘요!', // 기본 설명
  imageUrl = 'https://i.postimg.cc/HWZ9LPN2/It-s-me.png', // 기본 사이트 이미지 경로
}) => {
  const titleTag = document.querySelector('meta[property="og:title"]'); // document.querySelector를 사용하여 index.html의 해당 메타 태그를 선택

  // 해당하는 메타 태그가 없다면 document.querySelector는 null을 반환하게 되고, 그러고 .setAttribute 메서드를 호출하려 하면 오류가 발생
  if (titleTag) {
    // 따라서 if문으로 메타 태그가 존재하는지 확인한 후에 .setAttribute를 호출해야 함
    titleTag.setAttribute('content', `${title}`);
  }

  const descriptionTag = document.querySelector(
    'meta[property="og:description"]'
  );
  if (descriptionTag) {
    descriptionTag.setAttribute('content', description);
  }

  const imageTag = document.querySelector('meta[property="og:image"]');
  if (imageTag) {
    imageTag.setAttribute('content', imageUrl);
  }

  const urlTag = document.querySelector('meta[property="og:url"]');
  if (urlTag) {
    urlTag.setAttribute('content', window.location.href);
  }
};

export default function MyPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { userId, nickName, creatorId } = userStore();
  const { poll } = pollStore();

  const getChar = async () => {
    try {
      const response = await baseInstance.get('/characters', {
        params: {
          user_id: userId + creatorId, //꺼내온거 사용
          nick_name: nickName,
        },
      });
      console.log(response.data);
      setCharacters(response.data.characters);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChar();
    setMetaTags({
      title: "It's me?! 마이페이지",
      description: '친구들이 만들어준 캐릭터들을 확인해보세요!',
      imageUrl: 'https://i.postimg.cc/HWZ9LPN2/It-s-me.png', // 배포하고나서 이미지 url 바꿔주기 // 일단 메인페이지 이미지 넣어놈
    });
  }, []);
  const [copied, setCopied] = useState(false); // 복사 여부 상태 관리
  const { link } = linkStore();

  const handleCopyClick = () => {
    if (link) {
      navigator.clipboard.writeText(link).then(() => {
        setCopied(true);
      });
    }
  };
  return (
    <Container>
      <BoxContainer title={''}>
        <Top>
          <CharLayout>
            <Title>{nickName} 님 본인이 만든 캐릭터에요!</Title>
            <FlipCardLayout>
              <FlipCard imageURL={characters[0]?.result_url} keywords={[]} />{' '}
              {/* 첫 번째 만들어진 캐릭터의 이미지를 FlipCard 컴포넌트에 전달 */}
            </FlipCardLayout>

            <Link to={`/answerroom/${poll}/${userId}`}>
              {userId === '' ? null : <Button title={'캐릭터 다시 만들래요'} />}
            </Link>
          </CharLayout>

          <CharLayout>
            <Title>중복된 키워드로 만든 {nickName} 님이에요!</Title>
            <FlipCardLayout>
              <FlipCard imageURL='' keywords={[]} />
              {/* {characters.slice(1).map((character) => (
                <FlipCard key={character.id} imageURL={character.result_url} />
              ))}{' '} */}
              {/* 첫 번째 이미지를 제외하고 나머지 캐릭터들을 순회하며 FlipCard 컴포넌트에 전달 */}
            </FlipCardLayout>
            {userId === '' ? null : (
              <Button title={'중복 캐릭터 다시 만들기'} />
            )}
            <CopyButton onClick={handleCopyClick} disabled={copied}>
              {copied ? '복사 완료!' : 'URL 복사하기'}
            </CopyButton>
          </CharLayout>
        </Top>

        <HorizontalLine />
        <BasicTabs onSubmit={getChar} />
      </BoxContainer>
    </Container>
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const CopyButton = styled.button``;
