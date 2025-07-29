
import '../styles/global.css';
import type { AppProps } from 'next/app';
import Menu from '../components/Menu';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <div style={{margin: '2%'}} >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
