import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { StyleContext } from '../../contexts/StyleContext';
import styles from './style.module.css';
export default function SideMenu(){
    const {theme,toggleTheme} = useContext(StyleContext)
    return(
        <div className={styles.SideMenuContainer}>
            <ul className={styles.SideMenuItens}>
                <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme.title=='light'}
                />
            </ul>
        </div>
    )
}