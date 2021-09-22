import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    position: absolute;
    z-index: 2;
    height: 64px;
    background: #556CD6;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:white;
    padding:1rem;
    h6{
        padding: 15px;
        font-weight: 400;
    }
    span{
        text-align: center;
        padding:1rem ;
    }
`
export const SignOut = styled.button`
    padding: 0.5rem;

    border: 1px solid transparent;
    border-radius: 5px;

    background-color: ${props => props.theme.colors.blueDark};
    color: ${props => props.theme.colors.white };

    display: inline-flex;
    align-items: center;
    justify-content: center;


`