import { styled } from 'styled-components';
import AnswerInput from '../components/Input/AnswerInput';
import RoundButton from '../components/Btn/RoundBtn';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { baseInstance } from '../apis/config';
import { useEffect, useState } from 'react';
import { usePollIdStore } from '../stores/pollId';
import NickNameInput from '../components/Input/NickNameInput';
import { userStore } from '../stores/userStore';
import { taskIdStore } from '../stores/taskId';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { linkStore } from '../stores/link';

const setMetaTags = ({
  title = "It's me?!", // 기본 타이틀
  description = '친구들의 답변으로 닮은 캐릭터를 만들어줘요!', // 기본 설명
  imageUrl = 'https://i.postimg.cc/HWZ9LPN2/It-s-me.png', // 기본 사이트 이미지 경로
}) => {
  const titleTag = document.querySelector('meta[property="og:title"]'); // document.querySelector를 사용하여 index.html의 해당 메타 태그를 선택

  // 해당하는 메타 태그가 없다면 document.querySelector는 null을 반환하게 되고, 그러고 .setAttribute 메서드를 호출하려 하면 오류가 발생
  if (titleTag) {
    // 따라서 if문으로 메타 태그가 존재하는지 확인한 후에 .setAttribute를 호출해야 함
    titleTag.setAttribute('content', `${title}`);
  }

  const descriptionTag = document.querySelector(
    'meta[property="og:description"]'
  );
  if (descriptionTag) {
    descriptionTag.setAttribute('content', description);
  }

  const imageTag = document.querySelector('meta[property="og:image"]');
  if (imageTag) {
    imageTag.setAttribute('content', imageUrl);
  }

  const urlTag = document.querySelector('meta[property="og:url"]');
  if (urlTag) {
    urlTag.setAttribute('content', window.location.href);
  }
};

export default function AnswerPage() {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState<string[]>([]);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false); //모달 열리고 닫히고
  const { userId, nickName, setCreatorId } = userStore();
  const { setTaskId } = taskIdStore();
  const [nick, setNick] = useState(''); // 답변자 setNick 추후에 수정
  const { poll_id, user_id } = useParams();
  const { setLink } = linkStore();
  const usr_id = user_id || '';
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await baseInstance.get('/questions', {
          params: {
            poll_id: poll_id, //꺼내온거 사용
          },
        });
        setQuestions(response.data.questions);
      } catch (error) {
        console.error(error);
      }
      const url = window.location.href;
      setLink(url);
    };
    getQuestions();
    setMetaTags({
      title: "It's me?! 질문 list",
      description: '친구가 질문에 답변해주기를 요청하고 있어요!',
      imageUrl: 'https://i.postimg.cc/HWZ9LPN2/It-s-me.png', // 배포하고나서 이미지 url 바꿔주기 // 일단 메인페이지 이미지 넣어놈
    });

    if (nickName == '') {
      setModalOpen(true);
    }
    setCreatorId(usr_id);
  }, []);

  const createChar = async () => {
    const json = {
      poll_id: poll_id,
      creatorName: nickName !== '' ? nickName : nick,
      answers: value,
    };

    const response = await baseInstance.post('/characters', json);
    if (response.status === 201) {
      navigate('/result');
      console.log(response.data.task_id);
      setTaskId(response.data.task_id);
    }
  };

  return (
    <Container>
      <BoxContainer
        title={`질문에 답변을 달아주세요!
            답변을 기반으로 캐릭터를 만들어드릴게요.
          `}
      >
        <HorizontalLine />

        {/* 닉네임이 없으면 모달창 띄우고(modalOpen == true) 있음면 안 띄우게 하고싶음 */}
        {modalOpen === true ? (
          <ModalBackdrop>
            <NickNameInput setNick={setNick} setModalOpen={setModalOpen} />
          </ModalBackdrop>
        ) : null}

        {questions.map((questionTitle: any, index: number) => (
          <AnswerInput
            key={index}
            id={index}
            question={questionTitle}
            placeholder={''}
            value={value}
            setValue={setValue}
          />
        ))}

        <RButtonLayout>
          {userId === '' ? null : (
            <RoundButton title={'이전 페이지'} onClick={goBack} />
          )}
          <RoundButton title={'캐릭터 생성'} onClick={createChar} />
        </RButtonLayout>
      </BoxContainer>
    </Container>
  );
}

const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

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
