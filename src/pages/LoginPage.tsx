import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';
import RoundButton from '../components/Btn/RoundBtn';
import {
  Link,
  Navigate,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { opacityVariants } from '../constants/variants';
import { useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { userStore } from '../stores/userStore';
import { pollStore } from '../stores/poll';
import { useCheckAuth } from '../hooks/useCheckAuth';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('');
  const navigate = useNavigate();
  const { setUserId, userId } = userStore(); // userStore에서 꺼내오기
  const { setPoll } = pollStore();
  const { setNickName } = userStore();
  const authState = useCheckAuth();

  useEffect(() => {
    if (id === '') {
      console.log('hi');
    } else {
      navigate(`/mypage/${userId}`);
    }
  }, [userId]);

  const createUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { user_id: id, password: passwd };
    try {
      const response = await baseInstance.post('/login', data);

      setUserId(id);
      setPoll(response.data.user_data.poll_id);
      setNickName(response.data.user_data.nick_name);
    } catch (error) {
      alert('다시 작성해주세요');
      console.error(error);
    }
  };
  const authState = useCheckAuth();
  const ls = JSON.parse(localStorage.getItem('user'));
  if (authState) {
    return <Navigate to={`/mypage/${ls.state.userId}`} />;
  }

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
