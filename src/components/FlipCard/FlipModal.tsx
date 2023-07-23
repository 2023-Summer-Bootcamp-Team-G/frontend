import { styled } from 'styled-components';
import { MouseEvent } from 'react';
import FlipCard from './FlipCard';
import { Link } from 'react-router-dom';

type Props = {
  setModal: any;
};

export default function FlipModal({ setModal }: Props) {
  return (
    <Layout>
      <Title>이 캐릭터로 만드시겠어요?</Title>
      <CardLayout>
        <FlipCard />
      </CardLayout>
      <BtnLayout>
        <Button onClick={() => setModal(false)}>아니요</Button>
        <Button>좋아요</Button>
      </BtnLayout>
    </Layout>
  );
}

const Layout = styled.div`
  width: 43.75rem;
  height: 43.75rem;
  border-radius: 1.4375rem;
  background: #fffbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Title = styled.p`
  color: #2c2c2c;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const CardLayout = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;
const BtnLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  /*네모 박스*/
  padding: 0.8rem 2rem;
  border-radius: 5rem;
  background: #2c2c2c;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.75rem;
  }
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
