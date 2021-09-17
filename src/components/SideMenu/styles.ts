import styled from 'styled-components';

export const SideMenuContainer = styled.div`
    background-color: var(--white);
    color:var(--text);

    position: fixed;
    left: 0;
    top:0;

    width: 112px;
    height: 100vh;

    ul{
        appearance: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;

        li {
            padding: 1rem;
            appearance: none;
            list-style: none;
            text-align: center;
            cursor: pointer;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            span{
                background-color: blue;
                height: 56px;
                width: 4px;
                position:absolute;
                left: 0;

                border: 1px solid blue;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
`