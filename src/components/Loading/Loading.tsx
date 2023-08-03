import { styled } from 'styled-components';
import BoxInDog from './BoxInDog';

type TitleProps = {
  title: string;
};
export default function Loading({ title }: TitleProps) {
  const goBack = () => {
    history.back();
  };
  return (
    <SpinnerLayout>
      <Title>{title}</Title>
      {title === '캐릭터를 만들고 있어요!' ? (
        <BoxInDog />
      ) : (
        <>
          <ReBtn onClick={goBack}>다시 만들러 가기</ReBtn>
          <img
            style={{ width: '24rem', height: '24rem' }}
            src='https://ifh.cc/g/2cQVbJ.png'
          />
        </>
      )}
    </SpinnerLayout>
  );
}

const SpinnerLayout = styled.div`
  width: 30.125rem;
  height: 30.125rem;
  border-radius: 1.4375rem;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: #2c2c2c;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  padding-top: 2.6rem;
  margin-bottom: 1rem;
  font-family: 'CookieRun-Regular';
`;

const ReBtn = styled.button`
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  color: red;
`;
