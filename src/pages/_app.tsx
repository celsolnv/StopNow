import { ChallengeContextProvider } from '../contexts/ChallengeContext';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/global.css';

// :root{
  // white:#fff,
  // background:#f2f3f5,
  // gray-line: #dcdde0,
  // text: #666666,
  // text-highlight: #b3b9ff,
  // title: #2E384D,
  // red: #E83F5B,
  // green: #4CD62B,
  // blue: #5965E0,
  // blue-dark: #4953B8,
  // blue-twitter: #2AA9E0,
// }

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    white:'#fff',
    background:'#f2f3f5',
    grayLine: '#dcdde0',
    text: "#666666",
    textHighlight: "#b3b9ff",
    title: "#2E384D",
    red: "#E83F5B",
    green: "#4CD62B",
    blue: "#5965E0",
    blueDark: "#4953B8",
    blueTwitter: "#2AA9E0",
  },
}
const themeDark = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeContextProvider>
      <Component {...pageProps} />
    </ChallengeContextProvider>
  )
}

export default MyApp
