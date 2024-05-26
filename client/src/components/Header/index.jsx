import styles from "./header.module.css";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onChangeDueDate(event) {
    setDueDate(event.target.value);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <img className={styles.logoImage} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO2Xv0vDQBTHr+I/orujS+UtThWKYCOCuy6Cg4KxFqHi4I9FwcHBseCglKODBGw71dFFVCgFV0HImlv7JKWtaZuay9nkrva+8IYMd3w+dy/khRAdHflhVYIiRVSJFogy0LAxqOwDIlTAsbcWgEm4AYiwiBZo6BvAUbUQW8nOj+07wNZ3thzDbLKMeTZ2Aiy3VGCrJjKjXWEkZAs4ZbLp7C//wHdr70h5gdK9gU6FNFklgSybHpTguQlZ8LS4hnbOM736SDgZM6+kQKlotODdr3XPpOuV2M1YSrYQbZ98Z9wYGNXLU8hOk3dc8HEL0D54PwGnSoLbRoYA9YHvFwgNH5cAHQLvFRCCj0OA/gLfERCGj1qABsC79Sf4KAV44GuFBTX/B3jhQcUfmjDwoJpAWHhQSUAEHlQREIUHFQTckTgYPjl0vXSB58s5tA8ToU8eVBBIvX20IN/PZ3wlagHw0gU2nqwubL8EDzzIFsg/XPWceEeCFx5kC9zcbuNXbhpfT2bRuk61no8fL0LtQWQKpF/quFj/FF4PsgVGUUQLNPQNoG6hiW4hHZ1/nm/i3N6eIU5EeAAAAABJRU5ErkJggg==" />
        <p className={styles.logoName}>CheckMate</p>
        </div>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <input
          placeholder="Add description"
          type="text"
          onChange={onChangeDescription}
          value={description}
        />
        <input
          placeholder="Due date"
          type="date"
          onChange={onChangeDueDate}
          value={dueDate}
        />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}
