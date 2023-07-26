import styled from 'styled-components';

type CharBoxProps = {
  imageURL: string;
  onClick: any;
};

export default function CharBox({ imageURL, onClick }: CharBoxProps) {
  return (
    <Box>
      <img
        style={{ width: '13rem', height: '13rem' }}
        src={imageURL}
        alt='Character'
        onClick={onClick}
      />
    </Box>
  );
}

const Box = styled.div`
  width: 13rem;
  height: 13rem;

  //   background-color: red; // 위치 잘 보기위해서 넣은 색
`;
