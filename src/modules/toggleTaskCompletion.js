import tasks from './getTasks.js';
import saveTasksToLocalStorage from './saveTasks.js';

const toggleTaskCompletion = (checkboxId) => {
  const taskToToggle = tasks.find((task) => task.index === checkboxId);

  if (taskToToggle) {
    taskToToggle.complete = !taskToToggle.complete;
    saveTasksToLocalStorage();
  }
};

export default toggleTaskCompletion;