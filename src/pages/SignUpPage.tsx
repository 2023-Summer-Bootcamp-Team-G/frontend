import { styled } from 'styled-components';
import LoginInput from '../components/Input/LoginInput';
import RoundButton from '../components/Btn/RoundBtn';

export default function SignUpPage() {
  return (
    <BackLayout>
      <Box>
        <WhiteBox>
          <h1>회원가입</h1>
          <LoginInput
            title='닉네임'
            placeholder='친구들에게 보여지는 이름이에요!'
          />
          <LoginInput title='아이디' placeholder='영문 + 숫자' />
          <LoginInput title='비밀번호' placeholder='6자리 이상' />
          <RoundButton title='회원가입' />
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
`;
const Img1 = styled.img`
  width: 15.5rem;
  height: 15.5rem;
`;
const Img2 = styled.img`
  width: 25.5rem;
  height: 25.5rem;
`;

const BackLayout = styled.div`
  /* padding: 3.5rem; */
  display: flex;
  background: linear-gradient(#ff6600, #ffc301);
`;
const WhiteBox = styled.div`
  width: 42rem;
  height: 43rem;
  background: white;
  border-radius: 0.94rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
