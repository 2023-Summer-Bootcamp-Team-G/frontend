import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/questionroom' element={<></>} />
        <Route path='/answerroom' element={<></>} />
        <Route path='*' element={<>error page</>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
