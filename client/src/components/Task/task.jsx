import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { LiaEditSolid } from 'react-icons/lia';
import { useState } from 'react';

export function Task({ task, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    onEdit(task.id, editedTitle, editedDescription, editedDueDate);
    setIsEditing(false);
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <div className={styles.taskDetailsContainer}>
        {isEditing ? (
          <div className={styles.editInputs}>
            <input 
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input 
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <input 
              type="date"
              value={editedDueDate}
              onChange={(e) => setEditedDueDate(e.target.value)}
            />
            <button className={styles.editButton} onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className={task.isCompleted ? `${styles.taskDetails} ${styles.textCompleted}` : styles.taskDetails}>
            <div className={styles.taskContent}>
              <div>
                <span className={styles.taskTitle}>{task.title}</span>
                <span className={styles.taskDescription}>{task.description}</span>
              </div>
              <div className={styles.taskDueDateContainer}>
                <span className={styles.taskDueDateLabel}>Due Date:</span>
                <span className={styles.taskDueDate}>{task.dueDate}</span>
              </div>
            </div>
          </div>
        )}

        <div className={styles.taskButtons}>
          <button className={styles.editButton} onClick={handleEdit}>
            <LiaEditSolid size={20} />
          </button>
          <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
            <TbTrash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

