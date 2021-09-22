import Cookies from 'js-cookie';
import { useSession } from 'next-auth/client';
import { useContext, useEffect } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengeContext)
    const [session] = useSession();
    const userName = Cookies.get('username');

    return session ? (
        <div className={styles.profileContainer} >
            <img src={session?.user.image} alt={session?.user.name}/>
            <div>
                <strong>{session?.user.name}</strong>
                <p>
                    <img src='icons/level.svg' alt="level" />
                    Level { level }
                </p>
            </div>
        </div>
    ) : (
        <div className={styles.profileContainer} >
            <img src="images/anonymous.jpg" alt="usuário anônimo"/>
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src='icons/level.svg' alt="level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}