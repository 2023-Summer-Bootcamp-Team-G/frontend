import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import FlipCard from '../components/FlipCard/FlipCard';

import BasicTabs from '../components/Tab/Tab';
import { baseInstance } from '../apis/config';
import { useEffect, useState } from 'react';
import { userStore } from '../stores/userStore';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { linkStore } from '../stores/link';
import { pollStore } from '../stores/poll';

interface Character {
  id: number;
  result_url: string;
  nick_name: string;
  keyword?: string[];
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
  const { userId, nickName, setNickName } = userStore();
  const { poll } = pollStore();
  const [dupltask, setDuplTask] = useState(''); //중복 task_id
  const [dupliUrl, setDupliUrl] = useState<string>(); //중복 이미지 url
  const [keyword, setKeyword] = useState<string[]>([]); //중복 키워드
  const { user_id } = useParams();
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  const [loading, setLoading] = useState(true);
  const shouldContinue = true;

  const durl = dupliUrl || '';
  // 생성자
  const getChar = async () => {
    try {
      const response = await baseInstance.get('/characters', {
        params: { user_id: user_id },
      });

      setCharacters(response.data.characters);

      setNickName(response.data.nick_name);
    } catch (error) {
      console.error(error);
    }
  };

  // ------------------------------------------------중복
  const createDuplicate = async () => {
    const data = { user_id: user_id };
    const response = await baseInstance.post('/characters/duplicate', data);
    setDuplTask(response.data.task_id); //중복 taskid설정
  };

  useEffect(() => {
    getImages();
  }, [dupltask]);

  const getImages = async () => {
    // try {
    //   const response = await baseInstance.get(`/characters/urls/${dupltask}`);
    //   if (response.status === 200) {
    //     setDupliUrl(response.data.result_url); //중복
    //     setKeyword(response.data.keyword);

    //   }
    // } catch (error) {
    //   console.error(error);

    // }
    try {
      while (shouldContinue) {
        const response = await baseInstance.get(`/characters/urls/${dupltask}`);
        const statusCode = response.status;
        const resultUrl = response.data.result_url;
        const keyword = response.data.keyword;

        if (statusCode === 202) {
          // 대기 중이므로 재시도
          await new Promise((resolve) => setTimeout(resolve, 4000)); // 4초 후에 다시 폴링
        } else if (statusCode === 200) {
          // 폴링 완료
          setDupliUrl(resultUrl); //중복
          setKeyword(keyword);
          setLoading(false);
          break;
        } else {
          // 문제 발생
          // setLoading(false);
          throw new Error(
            `Failed to fetch URLs and keywords. Status code: ${statusCode}`
          );
        }
      }
    } catch (error) {
      // 에러 처리
      console.error(error);
      // alert으로 에러 메시지를 알려줄 수도 있습니다.
    }
  };

  function handleButtonClick() {
    createDuplicate();
  }

  //-------------------------------------------------중복

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

  // const authState = useCheckAuth();
  const ls = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <>
      {ls.state.userId === user_id ? (
        <Nav>
          <Copy>
            {userId !== '' && (
              <div>
                <span
                  className='material-symbols-rounded'
                  style={{
                    WebkitTransform: 'rotate(120deg)',
                    transform: 'rotate(120deg)',
                    color: 'white',
                  }}
                >
                  link
                </span>
                <CopyButton
                  style={{ color: 'white', fontSize: '1.2rem' }}
                  onClick={handleCopyClick}
                  disabled={copied}
                >
                  {copied ? 'URL 복사하기' : '질문지 공유'}
                </CopyButton>
              </div>
            )}
          </Copy>
          <Logout>
            <span
              className='material-symbols-rounded'
              style={{
                color: 'white',
                marginLeft: '1rem',
              }}
            >
              account_circle
            </span>

            <LogoutBtn
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.2rem',
              }}
              onClick={handleLogoutClick}
            >
              로그아웃
            </LogoutBtn>
          </Logout>
        </Nav>
      ) : null}

      <Container>
        <BoxContainer title={''}>
          <Top>
            <CharLayout>
              <Title>{nickName} 님 본인이 만든 캐릭터에요!</Title>
              <FlipCardLayout>
                <FlipCard
                  imageURL={characters[0]?.result_url}
                  keywords={characters[0]?.keyword}
                />
                {/* 첫 번째 만들어진 캐릭터의 이미지를 FlipCard 컴포넌트에 전달 */}
              </FlipCardLayout>

              <Wrapping>
                <StyledLink to={`/answerroom/${poll}`}>
                  {ls.state.userId === user_id ? (
                    <Sbtn>다시 만들기</Sbtn>
                  ) : null}
                </StyledLink>
              </Wrapping>
            </CharLayout>
            <DuplicateCharLayout>
              <Title>중복된 키워드로 만든 {nickName} 님이에요!</Title>
              {/* {dupliUrl === '' ? (
                <img
                  style={{
                    width: '25rem',
                    height: '25rem',
                    marginBottom: '4.25rem',
                  }}
                  src='https://i.postimg.cc/G22H5fH9/Group-374.png'
                />
              ) : ( */}
              {loading ? (
                <div>loading...</div>
              ) : (
                <FlipCardLayout>
                  <FlipCard imageURL={durl} keywords={keyword} />{' '}
                </FlipCardLayout>
              )}

              {/* )} */}
              {ls.state.userId === user_id ? (
                <Button1 onClick={handleButtonClick}>
                  {' '}
                  중복 캐릭터 만들기
                </Button1>
              ) : null}
            </DuplicateCharLayout>
          </Top>

          <HorizontalLine />

          <BasicTabs onSubmit={getChar} />
        </BoxContainer>
      </Container>
    </>
  );
}

const Top = styled.div`
  display: flex;
  padding: 0 4rem;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const CharLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const DuplicateCharLayout = styled.div`
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

const Sbtn = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 800;

  /*네모 박스*/
  width: 12rem;
  height: 4.125rem;
  border-radius: 0.5625rem;
  background: #222;
  display: inline-block;
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  width: 12rem;
`;
const Wrapping = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;
const Nav = styled.button`
  display: flex;
  align-content: right;
  position: absolute;
  right: 11rem;
  top: 3rem;
`;
const CopyButton = styled.button`
  align-items: center;
`;
const LogoutBtn = styled.button``;
const Logout = styled.button`
  display: flex;
  justify-content: center;
`;
const Copy = styled.button`
  margin-right: 1rem;
  align-items: center;
`;
