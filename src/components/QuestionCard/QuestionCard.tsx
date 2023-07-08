import React from "react";
import styled from "styled-components";

type QuestionCardProps = {
  question: string;
};

export default function QuestionCard({
  question,
}: QuestionCardProps): React.ReactElement {
  return (
    <RectangleLayout>
      <Rectangle>
        <ImageContainer>
          {/* <img src="#" alt="Bear" /> */}
          {/* 아직 이미지 삽입안해서 주석처리함 */}
        </ImageContainer>
        <Text>{question}</Text>
      </Rectangle>
    </RectangleLayout>
  );
}

const RectangleLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 12.5rem;  // 이미지 박스 짤려서 임시로 넣어놨어요
`;

const ImageContainer = styled.div`
  height: 6.25rem;
  width: 6.25rem;
  position: absolute;
  top: -3.125rem;
  left: 6.25rem;
  // background-color: red;  // 이미지 박스 위치 알아보기 쉬우라고 임시로 정한 색이에요
`;

const Rectangle = styled.div`
  /* Rectangle */
  position: relative;
  width: 18.75rem;
  height: 18.75rem;
  background: #fafafa;
  box-shadow: 6px 6px 10px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
`;

const Text = styled.div`
  /* 질문 내용 */
  position: absolute;
  padding: 0 1.56 0 1.56rem;
  width: 15.625rem;
  height: 4.75rem;
  left: 1.56rem;
  top: 7.69rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;
