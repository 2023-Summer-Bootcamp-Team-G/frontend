import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Btn/Btn';
import { keyframes } from 'styled-components';
import { useEffect } from 'react';

const setMetaTags = ({
  title = "It's me?!", // 기본 타이틀
  description = '친구들의 답변으로 닮은 캐릭터를 만들어줘요!', // 기본 설명
  imageUrl = 'https://i.postimg.cc/5yHTm09w/Main.png', // 기본 사이트 이미지 경로
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

export default function Main() {
  useEffect(() => {
    setMetaTags({
      title: "It's me?!",
      description: '친구들의 답변으로 닮은 캐릭터를 만들어줘요!',
      imageUrl: 'https://i.postimg.cc/5yHTm09w/Main.png', // 배포하고나서 이미지 url 바꿔주기
    });
  });
  return (
    <Container>
      <BackLayout>
        <ImgLayout>
          <CharLayout>
            <img
              style={{
                position: 'absolute',
                // top: '0',
                // left: '-1.25rem',
                width: '30rem',
                height: '30rem',
                // marginRight: '4rem',
              }}
              src='https://i.postimg.cc/m20Hmb7K/2.png'
              alt='토끼'
            />
            <img
              style={{
                position: 'absolute',
                // bottom: '-100px',
                // left: '0',
                // clear: 'both',
                width: '30rem',
                height: '30rem',
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
                // position: 'absolute',
                width: '44rem',
                height: '44rem',
                // margin: '0rem 20rem 0 20rem',
                // justifyContent: 'center',
                alignContent: 'cneter',
                // top: '50%',
                // left: '25%',
                // transform: 'translate(-50%, -50%)',
                // marginBottom: '30rem',
                marginTop: '-2.7rem',
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
                // position: 'absolute',
                // top: '0',
                // right: '0',
                width: '30rem',
                height: '30rem',
              }}
              src='https://i.postimg.cc/DZyJSmK4/4.png'
              alt='고양이'
            />
            <img
              style={{
                // position: 'absolute',
                // bottom: '-325px',
                // right: '0',
                // clear: 'both',
                width: '30rem',
                height: '30rem',
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
  position: relative;
  background: linear-gradient(#ff6600, #ffc301);
  height: 100vh;
  /* overflow: hidden; */
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
  /* left: 36rem; */
  justify-content: center;
  position: absolute;
  /* margin-bottom: 100rem; */
  margin-top: 44rem;
  margin-left: 11rem;
  /* margin-bottom: 5rem; */
  /* bottom: 3.87rem; */
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
  position: relative;
  border: 5px solid red;
`;
const ImgLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
