import removeCompletedTasks from './removeCompletedTasks.js';

const tasks = require('./getTasks.js').default;
const updateTasIndexes = require('./updateTaskIndexes.js').default;
const saveTasks = require('./saveTasks.js').default;
const renderList = require('./renderList.js').default;

jest.mock('./getTasks');
jest.mock('./updateTaskIndexes');
jest.mock('./saveTasks');
jest.mock('./renderList');
describe('removeCompletedTasks', () => {
  it('should remove all completed tasks', () => {
    removeCompletedTasks();
    expect(tasks.length).toBe(2);
    expect(tasks).toStrictEqual([
      { index: 0, description: 'Go for spree shopping on a Friday', complete: false },
      { index: 1, description: 'Buy groceries in the evening', complete: false },
    ]);
    expect(updateTasIndexes).toHaveBeenCalled();
    expect(saveTasks).toHaveBeenCalled();
    expect(renderList).toHaveBeenCalled();
  });
});