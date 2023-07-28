import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';
import Button from '../components/Btn/Btn';
import BasicTabs from '../components/Tab/Tab';
import { baseInstance } from '../apis/config';
import { useEffect, useState } from 'react';
import { userStore } from '../stores/userStore';
import { Link, useParams } from 'react-router-dom';
import { taskIdStore } from '../stores/taskId';
import { linkStore } from '../stores/link';
import { pollStore } from '../stores/poll';

interface Character {
  id: number;
  result_url: string;
  nick_name: string;
}

// type Task = {
//   result_url: string;
//   keyword: string;
// }

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
  const { taskId, setTaskId } = taskIdStore();
  const [dupliUrl, setDupliUrl] = useState<string>('');
  const [keyword, setKeyword] = useState<string[]>([]);

  const durl = dupliUrl || '';

  // 생성자
  const getChar = async () => {
    try {
      let params = {};
      console.log(userId);

      if (userId === '') {
        params = {
          user_id: creatorId,
        };
      } else {
        params = {
          user_id: userId,
        };
      }

      const response = await baseInstance.get('/characters', {
        params: params,
      });

      setCharacters(response.data.characters);
      console.log(response.data.characters);
    } catch (error) {
      console.error(error);
    }
  };

  // 중복
  function a() {
    createDuplicate();
    getImages();
  }

  const createDuplicate = async () => {
    const data = { user_id: userId };

    const response = await baseInstance.post('/characters/duplicate', data);
    console.log(response.data);
    setTaskId(response.data.task_id);
  };

  const getImages = async () => {
    try {
      const response = await baseInstance.get(`/characters/urls/${taskId}`);

      setDupliUrl(response.data.result_url[0]);
      setKeyword(response.data.keyword);
      console.log(dupliUrl);
      console.log(response.data.keyword);
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
            {dupliUrl === '' ? (
              <img
                style={{
                  width: '25rem',
                  height: '25rem',
                  marginBottom: '4.25rem',
                }}
                src='https://i.postimg.cc/G22H5fH9/Group-374.png'
              />
            ) : (
              <FlipCardLayout>
                <FlipCard imageURL={durl} keywords={[]} />{' '}
              </FlipCardLayout>
            )}

            {userId === '' ? null : (
              <Button1 onClick={a}> 중복 캐릭터 만들기</Button1>
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

const LimitBox = styled.div`
  display: flex;
  justify-content: center;
`;

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
const Button1 = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 800;

  /*네모 박스*/
  width: 22.1875rem;
  height: 4.125rem;
  border-radius: 0.5625rem;
  background: #222;
  display: inline-block;
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
const CopyButton = styled.button``;
