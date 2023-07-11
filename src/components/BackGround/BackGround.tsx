import { ReactNode } from 'react';
import { styled } from 'styled-components';

type TitleProps = {
  title: string;
  children: ReactNode;
};

export default function BackGround({ title, children }: TitleProps) {
  return (
    <BoxLayout>
      <Box>
        <Title>{title}</Title>
        {children}
      </Box>
    </BoxLayout>
  );
}

const BoxLayout = styled.div`
  padding: 5.81rem 7.5rem 0 7.5rem;
`;

const Box = styled.div`
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
