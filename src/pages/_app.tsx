import { Provider as NextProvider } from 'next-auth/client';
import { ChallengeContextProvider } from '../contexts/ChallengeContext';
import { StyleContextProvider } from '../contexts/StyleContext';
import GlobalStyle from '../styles/global';


function MyApp({ Component, pageProps }) {


  return (
    <NextProvider session={pageProps.session}>
      <StyleContextProvider>
        <ChallengeContextProvider>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ChallengeContextProvider>
      </StyleContextProvider>
    </NextProvider>
  )
}

export default MyApp
