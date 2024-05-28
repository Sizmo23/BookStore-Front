export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
  };
  