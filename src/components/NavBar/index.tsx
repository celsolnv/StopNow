import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { StyleContext } from '../../contexts/StyleContext';
import {Nav} from './styles'
export default function NavBar(){

    const {theme,toggleTheme} = useContext(StyleContext)

    return(
        <Nav>
            {/* <img src="./static/menu.svg" alt="Menu" id="btnMenu"/> */}
            <h1>StopNow</h1>
            <div>
                <span>Modo noturno</span>
                <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme.title=='light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    width={40}
                    height={10}
                    handleDiameter={20}

                    // offColor="black"
                />
            </div>

        </Nav>
    )

}