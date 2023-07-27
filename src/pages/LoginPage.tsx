import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';
import RoundButton from '../components/Btn/RoundBtn';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { opacityVariants } from '../constants/variants';
import { useState } from 'react';
import { baseInstance } from '../apis/config';
import { userStore } from '../stores/userStore';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('');
  const navigate = useNavigate();
  const { setUserId, userId } = userStore(); // userStore에서 꺼내오기

  const createUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { user_id: id, password: passwd };
    console.log(id);
    try {
      const response = await baseInstance.post('/login', data);

      setUserId(id); // 꺼내온거 사용

      if (response.status === 200) {
        navigate(`/mypage/${userId}`);
      }
    } catch (error) {
      alert('다시 작성해주세요');
      console.error(error);
    }
  };

  return (
    <BackLayout>
      <Box>
        <WhiteBox variants={opacityVariants} initial='initial' animate='mount'>
          <h1>로그인</h1>
          <LoginInput
            title='아이디'
            placeholder='영문 + 숫자'
            value={id}
            setValue={setId}
            type='text'
          />
          <LoginInput
            title='비밀번호'
            placeholder='6자리 이상'
            value={passwd}
            setValue={setPasswd}
            type='password'
          />
          <RoundButton onClick={createUser} title='로그인' />
          <br />
          <StyledLink to='/signup'>회원가입 하러가기</StyledLink>
        </WhiteBox>
        <ImgLayout>
          <Img1 src='https://i.postimg.cc/brLtCYTf/3.png' />
          <Img2 src='https://i.postimg.cc/524P2jGL/2.png' />
        </ImgLayout>
      </Box>
    </BackLayout>
  );
}
const StyledLink = styled(Link)`
  margin-right: 2rem;
`;
const Box = styled.div`
  margin: 3.37rem;
  display: flex;
`;
const ImgLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  justify-content: center;
`;
const Img1 = styled.img`
  width: 15rem;
  height: 15rem;
  position: relative;
  margin-left: 9rem;
`;
const Img2 = styled.img`
  width: 30rem;
  height: 30rem;
`;

const BackLayout = styled.div`
  /* padding: 3.5rem; */
  display: flex;
  background: linear-gradient(#ff6600, #ffc301);
`;
const WhiteBox = styled(motion.div)`
  width: 42rem;
  height: 43rem;
  margin-top: 3rem;
  margin-left: 9rem;
  background: white;
  border-radius: 0.94rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
