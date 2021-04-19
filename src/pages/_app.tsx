import { ChallengeContextProvider } from '../contexts/ChallengeContext';
import '../styles/global.css';
function MyApp({ Component, pageProps }) {
  return (
    <ChallengeContextProvider>
      <Component {...pageProps} />
    </ChallengeContextProvider>
  )
}

export default MyApp
