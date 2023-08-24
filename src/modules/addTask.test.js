import addTaskToList from './addTask'; 

jest.mock('./createTask');
jest.mock('./getTasks');
jest.mock('./updateTaskIndexes');
jest.mock('./saveTasks');
jest.mock('./renderList');

