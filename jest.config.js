const config = {
  verbose: true,
};

module.exports = async () => {
  if (!process.env.BROWSER) return config;
  global.window = global;
  return {
    ...config,
    preset: 'jest-puppeteer',
  };
};
