import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AnswerPage from './pages/AnswerPage';
import DetailPage from './pages/DetailPage';
import QuestionPage from './pages/QuestionPage';
import MyPage from './pages/MyPage';
import YourPage from './pages/YourPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/questionroom' element={<QuestionPage />} />
        <Route path='/answerroom/:poll_id/:user_id' element={<AnswerPage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/mypage/:user_id' element={<MyPage />} />
        <Route path='/yourpage' element={<YourPage />} />
        <Route path='/mypage/detail' element={<DetailPage />} />
        <Route path='*' element={<>error page</>} />
      </Routes>
    </>
  );
}

export default App;
