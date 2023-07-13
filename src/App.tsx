import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AnswerPage from './pages/AnswerPage';
import DetailPage from './pages/DetailPage';

import MyPage from './pages/MyPage';
import QuestionPage from './pages/QuestionPage';
import CharResultPage from './pages/CharResultPage';


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/questionroom' element={<QuestionPage />} />
        <Route path='/answerroom' element={<AnswerPage />} />
        <Route path='/result' element={<CharResultPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage/detail' element={<DetailPage />} />
        <Route path='*' element={<>error page</>} />
      </Routes>
    </>
  );
}

export default App;
