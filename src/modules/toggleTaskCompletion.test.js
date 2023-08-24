import toggleTaskCompletion from './toggleTaskCompletion.js';

const tasks = require('./getTasks.js').default;
const saveTasks = require('./saveTasks.js').default;

jest.mock('./getTasks');
jest.mock('./saveTasks');

describe('toggleTaskCompletion', () => {
  it('should toggle task completion status', () => {
    const checkboxId = 1;

    toggleTaskCompletion(checkboxId);

    expect(tasks[checkboxId].complete).toBe(true);
    expect(saveTasks).toHaveBeenCalled();
  });
});