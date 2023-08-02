import React, { useState } from 'react';
import styled from 'styled-components';

type ImageBoxProps = {
  src: string;
  name: string;
  selected: boolean;
  onClick: (name: string) => void;
};

const ImageChoice: React.FC<ImageBoxProps> = ({
  src,
  name,
  selected,
  onClick,
}) => {
  return (
    <ImageWrapper>
      <ImageBox onClick={() => onClick(name)} src={src} selected={selected} />
      <ImageName>{name}</ImageName>
    </ImageWrapper>
  );
};

export default function ImageList({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images: Omit<ImageBoxProps, 'selected' | 'onClick'>[] = [
    { src: 'https://ifh.cc/g/GvQbLl.jpg', name: '디즈니' },
    { src: 'https://ifh.cc/g/n70vTg.jpg', name: '3D 렌더링' },
    { src: 'https://ifh.cc/g/yVyL6d.jpg', name: '지브리' },
    { src: 'https://ifh.cc/g/P7w2bT.jpg', name: '팝아트' },
    { src: 'https://ifh.cc/g/RoGoQz.jpg', name: '픽셀아트' },
  ];

  const imageClick = (name: string, index: number) => {
    setSelectedImage(index);
    onSelect(name);
  };

  return (
    <>
      <Title>나랑 잘 어울리는 그림체는 뭐야?</Title>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageChoice
            key={index}
            {...image}
            selected={index === selectedImage}
            onClick={(name) => imageClick(name, index)}
          />
        ))}
      </ImageContainer>
    </>
  );
}

const Title = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  margin-bottom: 1.3rem;
  margin-left: 2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const ImageBox = styled.div<{ src: string; selected: boolean }>`
  width: 9rem;
  height: 9rem;
  border-radius: 0.625rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? '6px 6px 5px 6px rgba(0, 0, 0, 0.79)' : 'none'};

  /* &:hover {
    box-shadow: 6px 6px 5px 6px rgba(0, 0, 0, 0.411);
  } */
`;

const ImageName = styled.p`
  font-size: 1rem;
  color: black;
  text-align: center;
  margin-top: 1rem;
`;
