const config = {
  verbose: true,
  testTimeout: 10,
  maxWorkers: 1,
  setupFilesAfterEnv: ['./jest.setup.js'],
};

module.exports = async () => {
  if (!process.env.BROWSER) return config;
  global.window = global;
  return {
    ...config,
  };
};
