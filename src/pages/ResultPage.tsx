import { styled } from 'styled-components';
import BoxContainer from '../components/BoxContainer/BoxContainer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FlipModal from '../components/FlipCard/FlipModal';
import Loading from '../components/Loading/Loading';
import { urlsStore } from '../stores/urls';
import { keywordsStore } from '../stores/keywords';
import { taskIdStore } from '../stores/taskId';
import { userStore } from '../stores/userStore';
import { getImages } from '../utils/utils';
import Container from '../styles/Container';

export default function ResultPage() {
  //모달
  const [modal, setModal] = useState(false);
  const { nickName } = userStore();

  const showModal = (index: any) => {
    setModal(true);
    setIndex(index);
  };
  const closeModal = () => {
    setModal(false);
  };

  //로딩스피너
  const [loading, setLoading] = useState(true);

  //이미지 키워드 API
  const { taskId } = taskIdStore();
  const { urls, setUrls, setIndex } = urlsStore(); // userStore에서 꺼내오기
  const { setKeywords } = keywordsStore();
  const [title, setTitle] = useState('캐릭터를 만들고 있어요!');

  useEffect(() => {
    getImages(taskId)
      .then((data) => {
        setUrls(data.result_url);
        setKeywords(data.keyword);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setTitle('캐릭터를 생성하지 못하였습니다.');
      });
  }, []);

  return (
    <Container>
      <>
        <BoxContainer title={`내가 생각한 ${nickName}의 모습이에요!`}>
          <HorizontalLine />

          {loading === true ? (
            <ModalBackdrop>
              <Loading title={title} />
            </ModalBackdrop>
          ) : null}

          <PicLayout>
            {urls.map((src: any, index: number) => (
              <Pic
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                whileHover={{ scale: [null, 1.3, 1.2] }}
                transition={{ duration: 0.3 }}
                onClick={() => showModal(index)}
              />
            ))}
          </PicLayout>
        </BoxContainer>

        {modal && (
          <ModalBackdrop onClick={closeModal}>
            <Box onClick={(e: any) => e.stopPropagation()}>
              <FlipModal setModal={setModal} />
            </Box>
          </ModalBackdrop>
        )}
      </>
    </Container>
  );
}

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 1.25rem;
  margin-bottom: 3rem;
`;
const PicLayout = styled.div`
  display: flex;
  margin-bottom: 5.88rem;
  flex-wrap: wrap;
  width: 40rem;
  height: 40rem;
  padding: 2.12rem;
  align-content: space-between;
  justify-content: space-between;
  margin: auto;
`;
const Pic = styled(motion.div)`
  width: 16.875rem;
  height: 16.875rem;
  border-radius: 0.63rem;
  cursor: pointer;
  background-size: cover;
`;

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
  cursor: pointer;
`;
const Box = styled.div`
  pointer-events: auto;
`;
