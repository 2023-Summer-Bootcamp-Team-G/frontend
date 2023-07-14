import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Btn/Btn';

// const blinkAnimation = `
//   0% { opacity: 1; }
//   50% { opacity: 0; }
//   100% { opacity: 1; }
// `;

// const StyledImg = styled.img`
//   position: relative;

//   &.blink {
//     animation: ${blinkAnimation} 2s linear infinite;
//   }
// `;

export default function MainPage() {
  return (
    <ParentBox>
      <TextLayout>
        <Text>이게 나라고?</Text>
        <img src='https://i.postimg.cc/hhWXxq4Y/image-6.png' alt='이미지' />
      </TextLayout>

      {/* <ImgLayout> */}
      {/* <CharLayout> */}
      <img
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
      <img
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
          position: 'absolute',
          width: '50rem',
          height: '50rem',
          margin: '17.5rem 20rem 0 20rem',
          top: '50%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
        }}
        src='https://i.postimg.cc/V6GVj5FZ/1.png'
        alt='여우'
      />
      {/* <CharLayout> */}
      <img
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}
        src='https://i.postimg.cc/DZyJSmK4/4.png'
        alt='고양이'
        className='blink'
      />
      <img
        style={{
          position: 'absolute',
          bottom: '-325px',
          right: '0',
          clear: 'both',
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
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  transform: rotate(-8.491deg);
  margin-top: 7.5rem;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
