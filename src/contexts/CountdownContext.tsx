import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownContextProps{
    children:ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout : NodeJS.Timeout;


export function CountdownProvider({ children }:CountdownContextProps){
    const {startNewChallenge} = useContext(ChallengeContext);
    
    // const timeInit = 25 * 60;
    const timeInit = 0.05 * 60;
    const [time, setTime] = useState(timeInit);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished,setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(timeInit);

    }
    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        else if( isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
            }}
        >
            { children }
        </CountdownContext.Provider>
    )
}