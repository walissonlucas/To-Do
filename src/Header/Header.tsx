import styles from './Header.module.css'
import { SlNotebook } from 'react-icons/sl'

export function Header() {
    return (
        <div className={styles.header}>
            <strong className={styles.LogoName}> <SlNotebook size={33}/> To-Do <span className={styles.nameList}> List </span></strong>
        </div>
    )
    
}
