import styles from './Task.module.css'
import { FaPlus } from 'react-icons/fa';

export function Task() {
    return (
        <form className={styles.taskForm}>
            <textarea 
                className={styles.comment}
                placeholder="Adicione uma nova tarefa"
            />
            <button className={styles.button} type='submit'>
                <p>Criar</p>
                <FaPlus size={15}/>
            </button>
        </form>
    );
}