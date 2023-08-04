import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Btn/Btn';
import { useEffect } from 'react';
const setMetaTags = ({
  title = "It's me?!",
  description = '친구들의 답변으로 닮은 캐릭터를 만들어줘요!',
  imageUrl = 'https://i.postimg.cc/5yHTm09w/Main.png',
}) => {
  const titleTag = document.querySelector('meta[property="og:title"]');
  if (titleTag) {
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
export default function Main() {
  useEffect(() => {
    setMetaTags({
      title: "It's me?!",
      description: '친구들의 답변으로 닮은 캐릭터를 만들어줘요!',
      imageUrl: 'https://i.postimg.cc/5yHTm09w/Main.png',
    });
  });
  return (
    <Container>
      <BackLayout>
        <ImgLayout>
          <CharLayout>
            <img
              style={{
                width: '30rem',
                height: '30rem',
              }}
              src='https://i.postimg.cc/m20Hmb7K/2.png'
              alt='토끼'
            />
            <img
              style={{
                width: '28rem',
                height: '28rem',
                marginTop: '-3rem',
              }}
              src='https://i.postimg.cc/3wZ0rmzH/3.png'
              alt='고래'
            />
          </CharLayout>
          <CharLayout>
            <TextLayout>
              <Text>이게 나라고?</Text>
              <img
                style={{
                  width: '17rem',
                  height: '6rem',
                }}
                src='https://i.postimg.cc/hhWXxq4Y/image-6.png'
                alt='이미지'
              />
            </TextLayout>
            <img
              style={{
                width: '42.5rem',
                height: '42.5rem',
                alignContent: 'cneter',
                marginTop: '-1.2rem',
              }}
              src='https://i.postimg.cc/V6GVj5FZ/1.png'
              alt='여우'
            />
            <ButtonLayout>
              <Link to='/login'>
                <Button title={'바로 시작하기 >'}></Button>
              </Link>
            </ButtonLayout>
          </CharLayout>
          <CharLayout>
            <img
              style={{
                width: '28rem',
                height: '28rem',
              }}
              src='https://i.postimg.cc/DZyJSmK4/4.png'
              alt='고양이'
            />
            <img
              style={{
                width: '28rem',
                height: '28rem',
                marginTop: '-3rem',
              }}
              src='https://i.postimg.cc/nLxQt0Rk/5.png'
              alt='새'
            />
          </CharLayout>
        </ImgLayout>
      </BackLayout>
    </Container>
  );
}
const BackLayout = styled.div`
  background: linear-gradient(#ff6600, #ffc301);
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;
const Text = styled.div`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  transform: rotate(-8.491deg);
  margin-top: 2rem;
  margin-right: 4.7rem;
`;
const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 5rem;
  margin-left: 2rem;
`;
const ButtonLayout = styled.div`
  justify-content: center;
  position: absolute;
  margin-top: 44rem;
  margin-left: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const CharLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
`;
