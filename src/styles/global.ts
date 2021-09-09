import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --background: ${props => props.theme.colors.background};
    --text: ${props => props.theme.colors.text};
    --title: ${props => props.theme.colors.title};
    --red: ${props => props.theme.colors.red};
    --green: ${props => props.theme.colors.green};
    --white:${props => props.theme.colors.white};
    --gray:${props => props.theme.colors.gray};
    --primary:${props => props.theme.colors.primary};
    --secondary:${props => props.theme.colors.secondary};
    --text-highlight: #b3b9ff;
    --gray-line: #dcdde0;

    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;

    --text-blue: #B2B9FF;

}
@media(max-width:1048px){
    html{
        font-size: 93.75%; /* 15px */
    }
}
@media(max-width:720px){
    html{
        font-size: 87.5%; /* 14px */
    }
}
@media only screen and (min-device-width: 0px) and (max-device-width: 600px) {
    html{
        font-size: 81.25% ; /* 13px */
    }
}
body, button {
    font-family: 'Inter',Arial;
}

body{
    background-color: var(--background);
    color:var(--text);
}

body, input, textarea, button{
    font: 400 16px 'Inter',arial; 
}

button{
    cursor:pointer

}

a{
    text-decoration: none;
    color:inherit;
}

`