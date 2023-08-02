import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { opacityVariants } from '../constants/variants';
import { useCallback, useEffect, useState } from 'react';
import { baseInstance } from '../apis/config';
import { userStore } from '../stores/userStore';
import { pollStore } from '../stores/poll';
import SignBtn from '../components/Btn/SignBtn';
import useCheckAuth from '../hooks/useCheckAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { setNickName, setUserId, userId } = userStore(); // userStore에서 꺼내오기
  const { setPoll } = pollStore();

  // 닉네임, 아이디, 비밀번호, 비밀번호 확인
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  // 오류메시지 상태저장
  const [idMessage, setIdMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  useEffect(() => {
    if (id === '') {
      console.log('hi');
    } else {
      navigate(`/mypage/${userId}`);
    }
  }, [userId]);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = { user_id: id, password: pw };
      try {
        const response = await baseInstance.post('/login', data);

        setUserId(id);
        setPoll(response.data.user_data.poll_id);
        setNickName(response.data.user_data.nick_name); //필요 없는듯
      } catch (error) {
        alert('다시 작성해주세요');
        console.error(error);
      }
    },
    [id, pw, setUserId, setNickName, setPoll]
  );

  // 아이디
  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('test');
    const IdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{0,25}$/;
    const IdCurrent = e.target.value;
    setId(IdCurrent);

    if (!IdRegex.test(IdCurrent)) {
      setIdMessage('영문+숫자 조합으로 입력해주세요!');
      setIsId(false);
    } else {
      setIdMessage('');
      setIsId(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/;
      const passwordCurrent = e.target.value;
      setPw(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('영문+숫자 조합으로 6자리 이상 입력해주세요!');
        setIsPassword(false);
      } else {
        setPasswordMessage('');
        setIsPassword(true);
      }
    },
    []
  );

  const authState = useCheckAuth();
  const ls = JSON.parse(localStorage.getItem('user') || 'null');
  if (authState) {
    return <Navigate to={`/mypage/${ls.state.userId}`} />;
  }

  return (
    <BackLayout>
      <Box>
        <WhiteBox variants={opacityVariants} initial='initial' animate='mount'>
          <h1 style={{ marginBottom: '4rem' }}>로그인</h1>
          <form onSubmit={onSubmit}>
            <FormBox>
              <LoginInput
                title='아이디'
                placeholder='영문 + 숫자'
                value={id}
                // setValue={setId}
                type='text'
                onChange={onChangeId}
              />
              {id.length > 0 && (
                <span className={`message ${isId ? 'success' : 'error'}`}>
                  {idMessage}
                </span>
              )}
            </FormBox>
            <FormBox>
              <LoginInput
                title='비밀번호'
                placeholder='영문+숫자 6자리 이상'
                value={pw}
                // setValue={setPw}
                type='password'
                onChange={onChangePassword}
              />
              {pw.length > 0 && (
                <span className={`message ${isPassword ? 'success' : 'error'}`}>
                  {passwordMessage}
                </span>
              )}
            </FormBox>
            <SignBtn
              title='로그인'
              type='submit'
              // onClick={onSubmit}
              disabled={!(isId && isPassword)}
            />
            <br />
            <StyledLink to='/signup'>회원가입 하러가기</StyledLink>
          </form>
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
  width: 36rem;
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const FormBox = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  .message {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.0625rem;
    position: absolute;
    top: 0.2rem;
    left: 9.5rem;
    &.success {
      color: #8f8c8b;
    }
    &.error {
      color: #ff2727;
    }
  }
`;
