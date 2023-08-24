import removeTask from './removeTask.js';

const getTasksMock = require('./getTasks.js').default;
const updateTaskIndexesMock = require('./updateTaskIndexes.js').default;
const saveTasksMock = require('./saveTasks.js').default;

jest.mock('./getTasks');
jest.mock('./saveTasks');
jest.mock('./updateTaskIndexes');
describe('removeTask function', () => {
  it('Remove a task, update indexes, and save to local storage', () => {
    const indexToRemove = 0;
    removeTask(indexToRemove);
    // Assertions
    expect(getTasksMock.length).toBe(4); // Assuming one task was removed
    expect(updateTaskIndexesMock).toHaveBeenCalled();
    expect(saveTasksMock).toHaveBeenCalled();
  });
});