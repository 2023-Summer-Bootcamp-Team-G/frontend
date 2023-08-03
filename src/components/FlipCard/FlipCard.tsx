import { useState } from 'react';
import { styled } from 'styled-components';
import KeywordTag from '../KeywordTag/KeywordTag';

type FlipCardProps = {
  imageURL: string | undefined;
  keywords: string[] | undefined;
  // onSubmit: () => Promise<void>;
};

export default function FlipCard({ imageURL, keywords }: FlipCardProps) {
  const [boxChange, setBoxChange] = useState(true);

  const handleBoxClick = () => {
    setBoxChange((prevState) => !prevState);
  };

  return (
    <BoxLayout onClick={handleBoxClick}>
      <CharBox boxChange={boxChange}>
        {imageURL ? (
          <img
            style={{ width: '20rem', height: '20rem', borderRadius: '0.63rem' }}
            src={imageURL}
          />
        ) : (
          <img
            style={{ width: '20rem', height: '20rem', borderRadius: '0.63rem' }}
            src='https://i.postimg.cc/G22H5fH9/Group-374.png'
          />
        )}
      </CharBox>
      <TagBox boxChange={boxChange}>
        {keywords?.map((keyword: any, index: number) => (
          <KeywordTag key={index} title={keyword} />
        ))}
      </TagBox>
    </BoxLayout>
  );
}

const BoxLayout = styled.div`
  width: 21.8215rem;
  height: 21.8215rem;
  position: relative;
`;

const CharBox = styled.div<{ boxChange: boolean }>`
  width: 20rem;
  height: 20rem;

  background-size: contain; //이미지 안 잘리게
  border-radius: 0.63rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.boxChange ? 2 : 1)}; //z 순서 바꿔주기
  transform: translate(
    ${(props) => (props.boxChange ? 0 : '1.75rem')},
    ${(props) => (props.boxChange ? 0 : '1.25rem')}
  ); // x, y 이동하게 하는거. x = 0 -> 3.875, y = 0 -> 1.875
  transition: transform 1s; //이동 시간
`;

const TagBox = styled.div<{ boxChange: boolean }>`
  width: 20rem;
  height: 20rem;
  background: linear-gradient(#ffda64, #fe9854);
  border-radius: 0.63rem;
  position: absolute;
  bottom: 0.5rem;
  right: 0;
  z-index: ${(props) => (props.boxChange ? 1 : 2)};
  transform: translate(
    ${(props) => (props.boxChange ? 0 : '-1.75rem')},
    ${(props) => (props.boxChange ? 0 : '-1.25rem')}
  );
  transition: transform 1s;
  overflow: hidden;
`;

/* const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 8px;
`; */
