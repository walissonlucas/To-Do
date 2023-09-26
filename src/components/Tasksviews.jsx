import { FaTrashAlt } from 'react-icons/fa';
import styles from './Tasksviews.module.css';
// import { useState } from 'react';

export const Tasksviews = ({ content, onDeleteTask, onCheckedTask }) => {


  const handleDeleteTask = () => {
    onDeleteTask(content)
  }

  const handleCheckedTask = () => {
    onCheckedTask();
  };

  return (
    <div className={styles.task_view}>

      <div className={styles.taskbox}>
        <input type="checkbox" onClick={handleCheckedTask}/>
        <p>{content}</p>
        <button onClick={handleDeleteTask} title='Deletar'>
          <FaTrashAlt size={18} />
        </button>
      </div>
      
    </div>
  )
}
