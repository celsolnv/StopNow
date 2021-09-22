import { useContext, useEffect } from 'react';
import Switch from 'react-switch';
import { signOut, useSession } from 'next-auth/client'; 

import { StyleContext } from '../../contexts/StyleContext';
import { Nav, SignOut} from './styles'
import { BiExit } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function NavBar(){

    const {theme,toggleTheme} = useContext(StyleContext)
    const [session] = useSession();
    const router = useRouter()

    useEffect(() => {
        console.log("my session => ",session);
        console.log("my User => ",Cookies.get("username"))

    }, [])
    function handleSignOut(){   
        if (session){
            signOut();
        } else{
            Cookies.remove('username');
        }
        router.push('/');
        return;
    }
    return(
        <Nav>
            <h1>StopNow</h1>
            <div>
                <span>Modo noturno</span>
                <Switch
                    onChange={toggleTheme}
                    checked={theme.title == 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    width={40}
                    height={10}
                    handleDiameter={20}
                />
                <SignOut
                    onClick={ () => handleSignOut() }
                >
                    Sair
                    <BiExit />
                </SignOut>
            </div>

        </Nav>
    )

}