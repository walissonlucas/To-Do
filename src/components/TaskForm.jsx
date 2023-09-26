import styles from './TaskForm.module.css'
import { FaPlus } from 'react-icons/fa';
import { Tasksviews } from './Tasksviews';
import { useState } from 'react';

export const TaskForm = () => {

   const [taskCount, setTaskCount] = useState(0);
   const handleCounterTask = () => {
      setTaskCount(taskCount + 1);
   };

   const [finishedTask, setFinishedTask] = useState(0);
   const handleFinishedTask = () => {
      setFinishedTask(finishedTask + 1);
   }; 

   const [text, setText] = useState([]);

   const [newTextTask, setNewTextTask] = useState('')

   const handleNewTask = () => {
      event.preventDefault();

      setText([...text, newTextTask]);
      setNewTextTask('');
   };

   const handleNewTaskChange = () => {
      setNewTextTask(event.target.value);
   };
  
   const deleteTask = (taskToDelete) => {
      
      const taskListWithoutDeleted = text.filter(text => {
         return text !== taskToDelete;
      })

      setText(taskListWithoutDeleted);

      setTaskCount(taskCount - 1);
   };

   const taskFormEmpty = newTextTask.length === 0;

   return (
      <div className='container'>
            <form onSubmit={handleNewTask} className={styles.taskForm}>
               <textarea 
                  required
                  name="task"
                  value={newTextTask}
                  className={styles.comment}
                  placeholder="Adicione uma nova tarefa"
                  onChange={handleNewTaskChange}
               />
               <button className={styles.button} type='submit' disabled={taskFormEmpty} onClick={handleCounterTask}>
                  <p>Criar</p>
                  <FaPlus size={15}/>
               </button>
            </form>

            <div className={styles.counter}>
               <p>Tarefas Criadas:</p> <span>{taskCount}</span>
            </div>

            <div className={styles.Task_finished}>
               <p>Concluídas:</p> <span>{`${finishedTask} / ${taskCount}`}</span>
            </div>

            <div className={styles.taskList}>
               {text.map(task => {
                  return (
                     <Tasksviews 
                        key={task} 
                        content={task} 
                        onDeleteTask={deleteTask} 
                        onCheckedTask={handleFinishedTask}
                     />
                  );
               })}
            </div>

      </div>
   );
}