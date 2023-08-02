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
          <img src={src} style={{ height: '4.5rem', width: '4.5rem' }} />
        </ImageContainer>
        <Text>{question}</Text>
      </Rectangle>
    </RectangleLayout>
  );
}

const RectangleLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 2.56rem 1.25rem 2.56rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: -17rem;
`;

const Rectangle = styled.div`
  /* Rectangle */
  display: flex;
  width: 16rem;
  height: 16rem;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  box-shadow: 6px 6px 10px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin-bottom: 2.25rem;
`;

const Text = styled.div`
  /* 질문 내용 */
  position: absolute;
  width: 13rem;
  height: 4.75rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
`;
