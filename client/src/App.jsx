import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks/tasks";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask({ title, description, dueDate }) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate,
      isCompleted: false
    }]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function editTaskById(taskId, newTitle, newDescription, newDueDate) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
          description: newDescription,
          dueDate: newDueDate
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
        onEdit={editTaskById}
      />
    </>
  )
}

export default App;
