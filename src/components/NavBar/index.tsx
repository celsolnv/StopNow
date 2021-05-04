import { useContext } from 'react';
import Switch from 'react-switch';
import { StyleContext } from '../../contexts/StyleContext';
import {Nav} from './styles'
export default function NavBar(){

    const {theme,toggleTheme} = useContext(StyleContext)

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
            </div>

        </Nav>
    )

}