import { ReactNode } from 'react';
import { styled } from 'styled-components';

type TitleProps = {
  title: string;
  children: ReactNode;
};

export default function BoxContainer({ title, children }: TitleProps) {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
}

const Box = styled.div`
  margin: 5.81rem 7.5rem 0 7.5rem;
  background: white;
  border-radius: 3.75rem 3.75rem 0 0;
  height: 100%;
  min-height: 90vh;
  padding: 1.88rem;
`;

const Title = styled.p`
  font-size: 2.25rem;
  white-space: pre-line;
  text-align: center;
`;
