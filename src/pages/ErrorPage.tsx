import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ErrorPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledHeading404>404</StyledHeading404>
        <StyledMessage>The requested page was not found</StyledMessage>
        <StyledButton onClick={goBack}>Back to Main</StyledButton>
      </StyledBox>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBox = styled.div`
  background-color: white;
  padding: 6rem;
  border-radius: 3.75rem;
  width: 67rem;
  height: 35rem;
`;

const StyledHeading404 = styled.div`
  font-size: 5.6rem;
  text-align: left;
  font-weight: 800;
`;

const StyledMessage = styled.div`
  font-size: 1.7rem;
  text-align: left;
  margin-top: 0.6rem;
`;

const StyledButton = styled.button`
  margin-top: 6rem;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 0.4rem;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
`;
