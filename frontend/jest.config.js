export default {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(jest-react-native|@react-native-community)/)'],
  moduleNameMapper: {
    '^@react-native-community/(.*)$': '<rootDir>/node_modules/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
