import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';
import { MouseEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseInstance } from '../apis/config';
import { userStore } from '../stores/userStore';
import { motion } from 'framer-motion';
import { opacityVariants } from '../constants/variants';
import { AxiosError } from 'axios';
import SignBtn from '../components/Btn/SignBtn';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { setUserId, setNickName } = userStore(); // userStore에서 꺼내오기

  // 닉네임, 아이디, 비밀번호, 비밀번호 확인
  const [nickname, setNickname] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  // 오류메시지 상태저장
  const [idMessage, setIdMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>('');

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = { nick_name: nickname, user_id: id, password: pw };

      try {
        const response = await baseInstance.post('/register', data);

        setUserId(id); // 꺼내온거 사용
        setNickName(nickname);

        if (response?.data?.message === 'User registered successfully.') {
          navigate('/questionroom');
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError && axiosError.response) {
          if (axiosError.response.status === 409) {
            alert('중복된 아이디입니다!');
          } else {
            alert('다시 작성해주세요!');
          }
        }
      }
    },
    [nickname, id, pw, navigate, setUserId, setNickName]
  );

  // 닉네임
  const onChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nickCurrent = e.target.value;
      setNickname(nickCurrent);
    },
    []
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

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (pw === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호가 일치합니다!');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
        setIsPasswordConfirm(false);
      }
    },
    [pw]
  );

  return (
    <BackLayout>
      <Box>
        <WhiteBox variants={opacityVariants} initial='initial' animate='mount'>
          <h1 style={{ marginBottom: '1.1rem' }}>회원가입</h1>
          <form onSubmit={onSubmit}>
            <LoginInput
              title='닉네임'
              placeholder='친구들에게 보여지는 이름이에요!'
              value={nickname}
              // setValue={setNickname}
              type='text'
              onChange={onChangeNickname}
            />
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
            <FormBox>
              <LoginInput
                title='비밀번호 확인'
                placeholder='영문+숫자 6자리 이상'
                value={passwordConfirm}
                // setValue={setPasswordConfirm}
                type='password'
                onChange={onChangePasswordConfirm}
              />
              {passwordConfirm.length > 0 && (
                <span
                  className={`message ${
                    isPasswordConfirm ? 'success' : 'error'
                  }`}
                >
                  {passwordConfirmMessage}
                </span>
              )}
            </FormBox>
            <SignBtn
              title='회원가입'
              onClick={onSubmit}
              disabled={!(isId && isPassword && isPasswordConfirm)}
            />
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
const Box = styled.div`
  margin: 3.37rem;
  display: flex;
`;

const ImgLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;
const Img1 = styled.img`
  width: 15rem;
  height: 15rem;
  margin-left: 9rem;
  position: relative;
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
