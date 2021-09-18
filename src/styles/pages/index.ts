import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    color:var(--white);
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & > div {
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-self: center;


        & > img {
            padding-bottom: 3rem;
        }

    }
`
export const Title = styled.h1`
    font-size: 2.25rem;
    font-weight: 600;
`
export const GithubButton = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    width: 320px;
    border:none;
    background-color: transparent;
    color:${props => props.theme.colors.textBlue};
    
    transition: filter 0.2s;
    &:hover{
        filter:brightness(0.9);
    }

    & > img{
        padding-right:1rem ;
    }
    & > span{
        font-size: 1.25rem;
    }

`

export const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    padding:1rem 0;


    & > input{
        border:1px solid transparent;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
        font-size: 1rem;
        height: 100%;
        padding: 0.875rem;
        color:${props => props.theme.colors.textBlue};
    }

    & > input::placeholder{
        color:${props => props.theme.colors.textBlue};        
    }

`

export const UserNameButton = styled.button<UserNameButtonProps>`
    background-color: ${props => props.isActive  ?
        props.theme.colors.green
        : props.theme.colors.blueDark
    };
    padding: 0 1rem;
    font-size: 0; 
    border: none;
    height: 100%;
    transition: 0.5s;
    border-radius: 0 5px 5px 0;



`

interface UserNameButtonProps{
    isActive:boolean;
}