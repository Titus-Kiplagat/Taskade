import tasks from './getTasks.js';
import renderList from './renderList.js';
import saveTasksToLocalStorage from './saveTasks.js';
import updateTaskIndexes from './updateTaskIndexes.js';

const removeCompletedTasks = () => {
  const filteredTasks = tasks.filter((task) => !task.complete);
  filteredTasks.sort((a, b) => a.index - b.index);
  filteredTasks.forEach((task, index) => {
    task.index = index;
  });

  tasks.length = 0;
  tasks.push(...filteredTasks);

  updateTaskIndexes();
  saveTasksToLocalStorage();
  renderList();
};

export default removeCompletedTasks;