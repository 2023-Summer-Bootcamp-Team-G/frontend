import { styled } from 'styled-components';
import BackGround from '../components/BackGround/BackGround';
import { Container } from '../styles/backgroundStyle';
import AnswerInput from '../components/Input/AnswerInput';
import RoundButton from '../components/Btn/RoundBtn';

export default function AnswerPage() {
  return (
    <Container>
      <BackGround
        title={`질문에 답변을 달아주세요!
            답변을 기반으로 캐릭터를 만들어드릴게요.
          `}
        children={
          <>
            <HorizontalLine />
            <AnswerInput
              question={`나를 동물로 표현한다면 어떤 동물이야?`}
              placeholder={''}
            />
            <AnswerInput
              question={`난 어떤 분위기야? 
                (EX. 웃음, 무표정, 화난, 찡그림, 귀여움, 시크, 무심함, 무서움, 발랄함 등등)`}
              placeholder={''}
            />
            <AnswerInput
              question={'나를 색으로 표현한다면 무슨 색이야?'}
              placeholder={''}
            />
            <AnswerInput
              question={`나는 어떤 그림체가 어울려?
              (디즈니 애니메이션, 지브리, 픽셀아트, 3D 중에 하나로 골라줘)`}
              placeholder={''}
            />

            <RButtonLayout>
              <RoundButton title={'이전 페이지'} />
              <RoundButton title={'캐릭터 생성'} />
            </RButtonLayout>
          </>
        }
      ></BackGround>
    </Container>
  );
}

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
`;

const RButtonLayout = styled.div`
  display: flex;
  justify-content: center;
`;
