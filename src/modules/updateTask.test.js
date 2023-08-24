import updateTaskDescription from './updateTask.js';

const tasks = require('./getTasks.js').default;
const saveTasks = require('./saveTasks.js').default;

jest.mock('./getTasks');
jest.mock('./saveTasks');

describe('updateTaskDescription', () => {
  it('should update the task description', () => {
    const index = 0;
    const newDescription = 'new task description';

    updateTaskDescription(index, newDescription);

    expect(tasks[index].description).toBe(newDescription);
    expect(saveTasks).toHaveBeenCalled();
  });
});