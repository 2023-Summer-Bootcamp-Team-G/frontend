import styled from 'styled-components';

type CharBoxProps = {
  imageURL: string;
};

export default function CharBox({ imageURL }: CharBoxProps) {
  return (
    <Box>
      <img
        style={{ width: '13rem', height: '13rem' }}
        src={imageURL}
        alt='Character'
      />
    </Box>
  );
}

const Box = styled.div`
  width: 13rem;
  height: 13rem;
  //   background-color: red; // 위치 잘 보기위해서 넣은 색
`;
