
import '../styles/global.css';
import type { AppProps } from 'next/app';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu/>
      <div style={{margin: '2%'}} >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
