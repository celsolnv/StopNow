import Head from 'next/head';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import Countdown from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengeContextProvider } from '../contexts/ChallengeContext';

interface HomeProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}
export default function Home(props) {



  return (
    <ChallengeContextProvider
      level = {props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
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
    </ChallengeContextProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx)=>{
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return{
    props:{
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  };
}