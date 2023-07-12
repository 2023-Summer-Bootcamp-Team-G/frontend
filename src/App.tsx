import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Loading title={'캐릭터를 만들고 있어요!'} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<></>} />
        <Route path='/signup' element={<></>} />
        <Route path='/questionroom' element={<></>} />
        <Route path='/answerroom' element={<></>} />
        <Route path='*' element={<>error page</>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
