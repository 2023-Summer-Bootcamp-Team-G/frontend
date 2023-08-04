import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AnswerPage from './pages/AnswerPage';
import DetailPage from './pages/DetailPage';
import QuestionPage from './pages/QuestionPage';
import MyPage from './pages/MyPage';
import ResultPage from './pages/ResultPage';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';

import * as tf from './utils/debug'; // 테스트 용도

(window as any).tf = tf;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/questionroom' element={<QuestionPage />} />
        <Route path='/answerroom/:poll_id' element={<AnswerPage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/mypage/:user_id' element={<MyPage />} />
        <Route path='/mypage/detail' element={<DetailPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
