import { styled } from 'styled-components';
import LoadingSpinner from './Spinner';

type TitleProps = {
  title: string;
};
export default function Loading({ title }: TitleProps) {
  return (
    <SpinnerLayout>
      <Title>{title}</Title>
      <LoadingSpinner />
      <Image />
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
  padding-top: 4.31rem;
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
