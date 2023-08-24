import addTaskToList from './addTask'; 

jest.mock('./createTask');
jest.mock('./getTasks');
jest.mock('./updateTaskIndexes');
jest.mock('./saveTasks');
jest.mock('./renderList');

describe('addTaskToList function', () => {
  it('Add a task, update indexes, save to local storage, and render the list', () => {
  
    addTaskToList('New Task');

    // Assertions
    const createTaskMock = require('./createTask').default;
    expect(createTaskMock).toHaveBeenCalledWith('New Task');

    const getTasksMock = require('./getTasks').default;
    expect(getTasksMock.length).toBe(1); // Assuming one task was added
    expect(getTasksMock[0]).toEqual({
      description: 'New Task',
      index: 42,
    });

    const updateTaskIndexesMock = require('./updateTaskIndexes').default;
    expect(updateTaskIndexesMock).toHaveBeenCalled();

    const saveTasksMock = require('./saveTasks').default;
    expect(saveTasksMock).toHaveBeenCalled();

    const renderListMock = require('./renderList').default;
    expect(renderListMock).toHaveBeenCalled();
  });
});
