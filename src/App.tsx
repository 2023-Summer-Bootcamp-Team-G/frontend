import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AnswerPage from './pages/AnswerPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/questionroom' element={<></>} />
        <Route path='/answerroom' element={<AnswerPage />} />
        <Route path='/mypage' element={<></>} />
        <Route path='*' element={<>error page</>} />
      </Routes>
    </>
  );
}

export default App;
