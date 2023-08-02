import { useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  setModalOpen: any;
  setNick: any;
};

export default function NickNameInput({ setNick, setModalOpen }: Props) {
  const [value, setValue] = useState();
  setNick(value);

  const handler = () => {
    if (value == null) {
      null;
    } else {
      setModalOpen(false); //modal창 닫기
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handler();
    }
  };
  return (
    <Layout>
      <Title>친구가 볼 닉네임을 써주세요!</Title>
      <InputBox>
        <Input
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <InputButton onClick={handler}>확인</InputButton>
      </InputBox>
      <Image />
    </Layout>
  );
}

const Layout = styled.div`
  width: 33.125rem;
  height: 33.125rem;
  border-radius: 1.4375rem;
  background: #fffbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: #2c2c2c;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

const Image = styled.div`
  width: 27.9375rem;
  height: 23.5rem;
  background-image: url('https://i.postimg.cc/y8rZLC5w/1.png');
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
`;

const Input = styled.input`
  all: unset;
  display: flex;
  align-items: center;
  width: 12rem;
  height: 2.67669rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: #f0f0f0;
  color: black;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  margin-left: 1.5rem;
  padding-left: 1rem;
`;

const InputButton = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;

  /*네모 박스*/
  width: 3.62856rem;
  height: 2rem;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  background: #2c2c2c;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.75rem;
  }
  &:hover {
    box-shadow: 3px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;
