import { styled } from "styled-components";

type TitleProps = {
  title: string;
};

export default function BackGround(props: TitleProps) {
  return (
    <Box>
      <Title>{props.title}</Title>
    </Box>
  );
}

const Box = styled.div`
  margin: 5.81rem 7.5rem 0 7.5rem;
  background: white;
  border-radius: 3.75rem 3.75rem 0 0;
  height: 100vh;
  padding: 1.88rem;
`;

const Title = styled.p`
  font-size: 2.25rem;

  text-align: center;
`;
