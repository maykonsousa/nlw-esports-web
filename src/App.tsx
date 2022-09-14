import { ThemeProvider } from 'styled-components';
import { Container } from './appStyles';
import logoImg from './assets/logo.svg';
import { GamesCarousel } from './components/GamesCarousel';
import { PublishBar } from './components/PublishBar';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <img src={logoImg} alt="Logo" />
        <h1>
          Seu <span>duo</span> está aqui.
        </h1>

        <GamesCarousel />
        <PublishBar />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
