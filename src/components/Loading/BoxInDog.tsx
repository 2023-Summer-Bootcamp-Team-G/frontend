import styled from 'styled-components';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/animation_lkt9dpm7.json';

export default function BoxInDog() {
  return (
    <LoadingBox>
      <LoadingText>loading...</LoadingText>
      <Lottie animationData={loadingLottie} />
    </LoadingBox>
  );
}
const LoadingText = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-weight: bold;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-family: 'CookieRun-Regular';
`;
const LoadingBox = styled.div`
  width: 28rem;
  height: 26.875rem;
  position: relative;
  margin-bottom: 2.6rem;
`;
