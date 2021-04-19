import Head from 'next/head';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import Countdown from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Pomodoro </title>
      </Head>
      <ExperienceBar/>
      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompleteChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox></ChallengeBox>
          </div>
        </section>
      </CountdownProvider>

    </div>
  )
}
