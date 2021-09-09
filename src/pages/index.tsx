import styled from '../styles/pages/Main.module.css';

export default function Home(){
    return(
        <div className={styled.container}>
            <img src="/images/simbolo.png" alt="simbolo" />
            <div className={styled.formContainer}>
                <img src="/images/logo.png" alt="logo" />
                <div>
                    <h1>Bem-vindo</h1>
                    <div className={styled.labelGithub}>
                        <img src="/icons/github.svg" alt="icon github" />
                        <span>Faça login com seu github para começar</span>
                    </div>
                    <div className={styled.formControl}>
                        <input type="text" placeholder="Digite seu username" />
                        <button>
                            <img src="/icons/right.svg" alt="arrow right" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}