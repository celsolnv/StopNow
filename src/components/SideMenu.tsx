import styles from '../styles/components/SideMenu.module.css';
export function SideMenu(){
    return(
        <div className={styles.SideMenuContainer}>
            <ul className={styles.SideMenuItens}>
                <li>Ativar modo dark</li>
                <li>Rank</li>
            </ul>
        </div>
    )
}