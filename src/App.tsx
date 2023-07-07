import { ThemeProvider } from 'styled-components';
import Button from './components/Btn/Btn';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button title='바로 시작하기>' />
    </ThemeProvider>
  );
}

export default App;
