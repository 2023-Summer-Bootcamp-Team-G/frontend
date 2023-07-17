import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';
import RoundButton from '../components/Btn/RoundBtn';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseInstance } from '../apis/config';

export default function SignUpPage() {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { nick_name: nickname, user_id: id, password: pw };

    try {
      const response = await baseInstance.post('/register/', data);
      console.log(response.data);

      if (response?.data?.message === 'User registered successfully.') {
        navigate('/login');
      }
    } catch (error) {
      alert('다시 작성해주세요!');
      console.error(error);
    }
  };

  return (
    <BackLayout>
      <Box>
        <WhiteBox>
          <h1>회원가입</h1>
          <LoginInput
            title='닉네임'
            placeholder='친구들에게 보여지는 이름이에요!'
            value={nickname}
            setValue={setNickname}
          />
          <LoginInput
            title='아이디'
            placeholder='영문 + 숫자'
            value={id}
            setValue={setId}
          />
          <LoginInput
            title='비밀번호'
            placeholder='6자리 이상'
            value={pw}
            setValue={setPw}
          />
          <RoundButton title='회원가입' onClick={createUser} />
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
const WhiteBox = styled.div`
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
`;
