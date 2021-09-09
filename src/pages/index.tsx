import { useSession, signIn, signOut } from "next-auth/client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styled from '../styles/pages/Main.module.css';

export default function Home(){
    const [userName, setUserName] = useState('');
    const [session] = useSession();
    const router = useRouter();
    console.log(session);
    useEffect(() => {
        if (session){
            router.push("/home")
            return;
        }
    }, [session])
    return(
        <div className={styled.container}>
            <img src="/images/simbolo.png" alt="simbolo" />
            <div className={styled.formContainer}>
                <img src="/images/logo.png" alt="logo" />
                <div>
                    <h1>Bem-vindo</h1>
                    <button 
                        onClick={()=>{signIn('github',{callbackUrl:'/home'})}}
                        className={styled.labelGithub}>
                        <img src="/icons/github.svg" alt="icon github" />
                        <span>Faça login com seu github para começar</span>
                    </button>
                    <div className={styled.formControl}>
                        <input 
                            type="text" 
                            placeholder="Digite seu username" 
                            value={userName} 
                            onChange={(e)=>{
                                setUserName(e.target.value)
                            }}
                        />
                        <button className={ userName ? styled.buttonActivated : '' }>
                            <img src="/icons/right.svg" alt="arrow right" />
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

