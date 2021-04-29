import { ChallengeContextProvider } from '../contexts/ChallengeContext';
import { StyleContextProvider } from '../contexts/StyleContext';
import GlobalStyle from '../styles/global';


function MyApp({ Component, pageProps }) {


  return (
      <StyleContextProvider>
        <ChallengeContextProvider>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ChallengeContextProvider>
      </StyleContextProvider>
  )
}

export default MyApp
