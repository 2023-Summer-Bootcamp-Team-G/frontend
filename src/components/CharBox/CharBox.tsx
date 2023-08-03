import styled from 'styled-components';

type CharBoxProps = {
  imageURL: string;
  onClick: any;
};

export default function CharBox({ imageURL, onClick }: CharBoxProps) {
  return (
    <Box>
      <img
        style={{ width: '11rem', height: '11rem' }}
        src={imageURL}
        alt='Character'
        onClick={onClick}
      />
    </Box>
  );
}

const Box = styled.div`
  width: 11rem;
  height: 11rem;

  //   background-color: red; // 위치 잘 보기위해서 넣은 색
`;
