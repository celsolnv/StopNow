import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';


export const ChallengeContext = createContext({} as ChallengeContextData);
interface Challenge{
    type: "body" | "eye";
    description: string;
    amount: number;
}

interface ChallengeContextProviderProps {
    children : ReactNode;
}
interface ChallengeContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    experienceNextToLevel:number;
    activeChallenge: Challenge;
    levelUp: ()=> void;
    startNewChallenge:()=> void;
    resetChallenge:()=> void;
    completeChallenge:()=> void;
}
export function ChallengeContextProvider({ children }:ChallengeContextProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceNextToLevel = Math.pow( (level+1) * 4,2 )

    function levelUp(){
        setLevel(level +1)
    }
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        
        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }
    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;
        let finalExperience = amount + currentExperience;

        if( finalExperience >= experienceNextToLevel ){
            finalExperience = finalExperience - experienceNextToLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }
    return (    
    <ChallengeContext.Provider 
        value={{
            level,
            levelUp ,
            currentExperience,
            challengesCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceNextToLevel,
            completeChallenge,
        }}>

        {children}
    </ChallengeContext.Provider>

    )
}