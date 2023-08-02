import { styled } from 'styled-components';
import AnswerInput from '../components/Input/AnswerInput';
import RoundButton from '../components/Btn/RoundBtn';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { baseInstance } from '../apis/config';
import { useCallback, useEffect, useState } from 'react';
import NickNameInput from '../components/Input/NickNameInput';
import { userStore } from '../stores/userStore';
import { taskIdStore } from '../stores/taskId';
import { linkStore } from '../stores/link';
import ImageList from '../components/choice/choice';
import ColorBtn from '../components/choice/color';
import Container from '../styles/Container';

const setMetaTags = ({
  title = "It's me?!", // 기본 타이틀
  description = '친구들의 답변으로 닮은 캐릭터를 만들어줘요!', // 기본 설명
  imageUrl = 'https://i.postimg.cc/5yHTm09w/Main.png', // 기본 사이트 이미지 경로
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
//-----------------------------------------------------------------------
export default function AnswerPage() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [value, setValue] = useState<Array<string | null>>([]); // 초기에 빈 배열로 설정

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false); //모달 열리고 닫히고
  const { userId, nickName, setCreatorId, setNickName } = userStore();
  const { setTaskId } = taskIdStore();
  const [nick, setNick] = useState(''); // 답변자 setNick 추후에 수정
  const { poll_id } = useParams();
  const { setLink } = linkStore();

  // 유효성 검사
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const goBack = () => {
    navigate(-1);
  };
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const handleColorSelect = (name: string) => {
    setSelectedColor(name);
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageSelect = (name: string) => {
    setSelectedImage(name);
  };

  // useEffect를 이용해서 value 배열의 변화를 감지, 배열의 모든 요소가 존재하는지 검사
  // value 배열의 모든 요소가 비어있지 않으면 isAnswer를 true로
  // questions 배열이 변경될 때마다 value 배열도 변경
  useEffect(() => {
    setValue(new Array(questions.length).fill(null));
  }, [questions]);

  // value 배열이 변경될 때마다 isAnswer 상태를 변경
  useEffect(() => {
    setIsAnswer(value.every((v: string | null) => v != null && v !== ''));
  }, [value]);

  // 유효성 검사에 실패할 경우 alert을 띄우는 함수
  const showAlert = useCallback(() => {
    alert('질문에 모두 답변해주세요!');
  }, []);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await baseInstance.get('/questions', {
          params: {
            poll_id: poll_id, //꺼내온거 사용
          },
        });
        const data = response.data.questions;
        setCreatorId(response.data.user_id);
        setNickName(response.data.nick_name);
        setQuestions([...data.slice(0, 4), ...data.slice(6)]);
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
      imageUrl: 'https://i.postimg.cc/5yHTm09w/Main.png', // 배포하고나서 이미지 url 바꿔주기 // 일단 메인페이지 이미지 넣어놈
    });

    if (userId == '') {
      setModalOpen(true);
    }
  }, []);
  //-----------post-------------------

  const createChar = async () => {
    // 만약 value 배열의 모든 요소가 비어있지 않고, selectedColor와 selectedImage가 모두 null이 아니라면
    // 캐릭터 생성을 진행하고, 그렇지 않다면 showAlert를 호출하고 함수를 종료합니다.
    if (!isAnswer || !selectedColor || !selectedImage) {
      showAlert();
      return;
    }

    const answers = [...value, selectedColor, selectedImage];
    // const answers = [...value];
    // if (selectedColor) {
    //   answers.push(selectedColor);
    // }
    // if (selectedImage) {
    //   answers.push(selectedImage);
    // }
    const json = {
      poll_id: poll_id,
      creatorName: userId !== '' ? nickName : nick,
      answers: [
        ...answers.slice(0, 4),
        ...answers.slice(-2),
        ...answers.slice(4, -2),
      ],
    };

    const response = await baseInstance.post('/characters', json);
    if (response.status === 201) {
      navigate('/result');

      setTaskId(response.data.task_id);
    }
  };

  const placeholders = [
    'ex. 호랑이를 닮았어! ',
    'ex. "후드티를 자주 입어!" or "팔찌를 자주 해!" ',
    'ex. 맥북을 자주 들고 다니지?',
    'ex. 카페에서 자주 나타나!',
  ];

  //---------------return-------
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
            placeholder={placeholders[index]}
            value={value}
            setValue={setValue}
          />
        ))}

        <ColorBtn onSelect={handleColorSelect} />
        <ImageList onSelect={handleImageSelect} />

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

const HorizontalLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;
  margin-left: 3.5rem;
`;

const RButtonLayout = styled.div`
  display: flex;
  justify-content: center;
`;
