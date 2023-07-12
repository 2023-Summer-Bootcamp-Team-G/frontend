import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';
import RoundButton from '../components/Btn/RoundBtn';
import { Link } from 'react-router-dom';
import { animate, motion } from 'framer-motion';
import { opacityVariants } from '../constants/variants';

export default function LoginPage() {
  return (
    <Layout>
      <Box variants={opacityVariants} initial='initial' animate='mount'>
        <h1>로그인</h1>
        <LoginInput title='아이디' placeholder='영문 + 숫자' />
        <LoginInput title='비밀번호' placeholder='6자리 이상' />
        <RoundButton title='로그인' />
        <br />
        <Link to='/signup'>회원가입 하러가기</Link>
      </Box>
      <ImgLayout>
        <Img1 src='https://i.postimg.cc/brLtCYTf/3.png' />
        <Img2 src='https://i.postimg.cc/524P2jGL/2.png' />
      </ImgLayout>
    </Layout>
  );
}

const ImgLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 8rem;
  /* justify-content: center; */
`;
const Img1 = styled.img`
  width: 15.5rem;
  height: 15.5rem;
  position: relative;
  left: 6rem;
`;
const Img2 = styled.img`
  width: 25.5rem;
  height: 25.5rem;
`;

const Layout = styled.div`
  padding: 3.5rem;
  display: flex;
  background: linear-gradient(#ff6600, #ffc301);
`;
const Box = styled(motion.div)`
  width: 42rem;
  height: 43rem;
  background: white;
  border-radius: 0.94rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
