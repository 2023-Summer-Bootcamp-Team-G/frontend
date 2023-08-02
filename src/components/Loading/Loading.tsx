import { styled } from 'styled-components';
import BoxInDog from './BoxInDog';

type TitleProps = {
  title: string;
};
export default function Loading({ title }: TitleProps) {
  return (
    <SpinnerLayout>
      <Title>{title}</Title>
      <BoxInDog />
    </SpinnerLayout>
  );
}

const SpinnerLayout = styled.div`
  width: 33.125rem;
  height: 33.125rem;
  border-radius: 1.4375rem;
  background: #f8f8f8;
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
  padding-top: 3.31rem;
  margin-bottom: 1rem;
  font-family: 'CookieRun-Regular';
`;
