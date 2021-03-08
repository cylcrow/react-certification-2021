const mockedGoogleAPIObject = {
  load: jest.fn(),
  client: {
    request: jest.fn().mockReturnValue(
      new Promise((res) => {
        res({ result: { items: [] } });
      })
    ),
  },
};

export default mockedGoogleAPIObject;
