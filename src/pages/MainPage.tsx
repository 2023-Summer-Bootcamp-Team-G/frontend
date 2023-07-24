import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Btn/Btn';
import { keyframes } from 'styled-components';

const blinkAnimation = `
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

// 위치 변경 애니메이션
const moveAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(10%, 20%); }
  50% { transform: translate(-20%, 10%); }
  75% { transform: translate(20%, -10%); }
  100% { transform: translate(-10%, -20%); }
`;

const StyledImg = styled.img`
  position: relative;

  &.blink {
    animation: ${blinkAnimation} 2s linear infinite,
      ${moveAnimation} 5s linear infinite; // 위치 변경 애니메이션
  }
`;

export default function MainPage() {
  return (
    <ParentBox>
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

      {/* <ImgLayout> */}
      {/* <CharLayout> */}
      <StyledImg
        style={{
          position: 'absolute',
          top: '0',
          left: '-1.25rem',
          width: '30rem',
          height: '30rem',
        }}
        src='https://i.postimg.cc/m20Hmb7K/2.png'
        alt='토끼'
        className='blink'
      />
      <StyledImg
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '0',
          clear: 'both',
          width: '30rem',
          height: '30rem',
        }}
        src='https://i.postimg.cc/3wZ0rmzH/3.png'
        alt='고래'
        className='blink'
      />
      {/* </CharLayout> */}
      <img
        style={{
          position: 'relative',
          width: '40rem',
          height: '40rem',
          // margin: '17.5rem 20rem 0 20rem',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
        src='https://i.postimg.cc/V6GVj5FZ/1.png'
        alt='여우'
      />
      {/* <CharLayout> */}
      <StyledImg
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '30rem',
          height: '30rem',
        }}
        src='https://i.postimg.cc/DZyJSmK4/4.png'
        alt='고양이'
        className='blink'
      />
      <StyledImg
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '0',
          clear: 'both',
          width: '30rem',
          height: '30rem',
        }}
        src='https://i.postimg.cc/nLxQt0Rk/5.png'
        alt='새'
        className='blink'
      />
      {/* </CharLayout> */}
      {/* </ImgLayout> */}
      <Link to='/login'>
        <StyledButton title={'바로 시작하기 >'}></StyledButton>
      </Link>
    </ParentBox>
  );
}

const ParentBox = styled.div`
  position: relative;
  height: 96vh;
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
`;
// const CharLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
// `;
// const ImgLayout = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
const StyledButton = styled(Button)`
  /* position: absolute; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
