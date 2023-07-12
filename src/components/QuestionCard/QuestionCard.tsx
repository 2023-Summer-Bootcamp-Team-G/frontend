import styled from 'styled-components';

type QuestionCardProps = {
  question: string;
  src: string;
};

export default function QuestionCard({ question, src }: QuestionCardProps) {
  return (
    <RectangleLayout>
      <Rectangle>
        <ImageContainer>
          <img src={src} />
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
  margin: 0.75rem 2.56rem 1.25rem 2.56rem; // 이미지 박스 짤려서 임시로 넣어놨어요
`;

const ImageContainer = styled.div`
  height: 6.25rem;
  width: 6.25rem;
  position: absolute;
  top: -3.125rem;
  left: 6.25rem;
`;

const Rectangle = styled.div`
  /* Rectangle */
  position: relative;
  width: 18.75rem;
  height: 18.75rem;
  background: #fafafa;
  box-shadow: 6px 6px 10px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin-bottom: 2.25rem;
`;

const Text = styled.div`
  /* 질문 내용 */
  position: absolute;
  // padding: 0 1.56rem;  // 왜 줬지;
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
