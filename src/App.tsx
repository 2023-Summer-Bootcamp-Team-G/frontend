import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
// import MainPage from './pages/main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <MainPage /> */}
    </ThemeProvider>
  );
}

export default App;
