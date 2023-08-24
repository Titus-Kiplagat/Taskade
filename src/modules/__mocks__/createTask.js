const createTaskMock = jest.fn().mockImplementation((description) => ({
  index: 0,
  description,
  complete: false,
}));

export default createTaskMock;
