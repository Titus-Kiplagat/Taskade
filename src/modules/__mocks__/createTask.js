const createTaskMock = jest.fn().mockImplementation((description) => ({
  description,
  index: 42,
}));

export default createTaskMock;
