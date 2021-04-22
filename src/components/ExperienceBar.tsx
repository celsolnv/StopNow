import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from  '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience,experienceNextToLevel } = useContext(ChallengeContext)

    const percentToNextLevel = Math.round(currentExperience * 100 / experienceNextToLevel);

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>

            <div>
                <div style={{ width:`${percentToNextLevel}%` }} ></div>

                <span className={styles.currentExperience}
                    style={{ left:`${percentToNextLevel}` }}
                >
                    {currentExperience} xp
                </span>
            </div>

            <span>{experienceNextToLevel} xp</span>
        </header>
    )
}