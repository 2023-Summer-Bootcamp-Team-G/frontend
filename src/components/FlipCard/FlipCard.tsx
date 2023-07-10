import { useState, useRef } from 'react';
import { styled } from 'styled-components';

export default function TestCard() {
  const [boxChange, setBoxChange] = useState(true);

  const handleBoxClick = () => {
    setBoxChange((prevState) => !prevState);
  };

  // TagBox안에 키워드 태그 들가야함
  return (
    <BoxLayout onClick={handleBoxClick}>
      <CharBox boxChange={boxChange}></CharBox>
      <TagBox boxChange={boxChange}></TagBox>
    </BoxLayout>
  );
}

const BoxLayout = styled.div`
  width: 28rem;
  height: 26.875rem;
  position: relative;
`;

const CharBox = styled.div<{ boxChange: boolean }>`
  width: 25rem;
  height: 25rem;

  background-size: contain; //이미지 안 잘리게
  border-radius: 0.63rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.boxChange ? 2 : 1)}; //z 순서 바꿔주기
  transform: translate(
    ${(props) => (props.boxChange ? 0 : '3rem')},
    ${(props) => (props.boxChange ? 0 : '1.875rem')}
  ); // x, y 이동하게 하는거. x = 0 -> 3.875, y = 0 -> 1.875
  transition: transform 1s; //이동 시간
`;

const TagBox = styled.div<{ boxChange: boolean }>`
  width: 25rem;
  height: 25rem;
  background: linear-gradient(#ffda64, #fe9854);
  border-radius: 0.63rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: ${(props) => (props.boxChange ? 1 : 2)};
  transform: translate(
    ${(props) => (props.boxChange ? 0 : '-3rem')},
    ${(props) => (props.boxChange ? 0 : '-1.875rem')}
  );
  transition: transform 1s;
`;
