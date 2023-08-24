import addTaskToList from './addTask.js';

const createTaskMock = require('./createTask.js').default;
const getTasksMock = require('./getTasks.js').default;
const updateTaskIndexesMock = require('./updateTaskIndexes.js').default;
const saveTasksMock = require('./saveTasks.js').default;
const renderListMock = require('./renderList.js').default;

jest.mock('./createTask');
jest.mock('./getTasks');
jest.mock('./updateTaskIndexes');
jest.mock('./saveTasks');
jest.mock('./renderList');

describe('addTaskToList function', () => {
  it('Add a task, update indexes, save to local storage, and render the list', () => {
    addTaskToList('New Task');

    // Assertions
    expect(createTaskMock).toHaveBeenCalledWith('New Task');

    expect(getTasksMock.length).toBe(6); // Assuming one task was added
    expect(getTasksMock[0]).toEqual({
      index: 0,
      description: 'New Task',
      complete: false,
    });

    expect(updateTaskIndexesMock).toHaveBeenCalled();

    expect(saveTasksMock).toHaveBeenCalled();

    expect(renderListMock).toHaveBeenCalled();
  });
});
