module.exports = {
  moduleFileExtensions: ['js', 'cjs', 'mjs', 'jsx', 'json'],

  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.mjs?$': 'babel-jest'
  },

  transformIgnorePatterns: ['node_modules/(?!(@hckrnews)/)'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  testMatch: ['**/__tests__/*.js'],

  testEnvironmentOptions: {
    url: 'http://localhost/'
  },

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.cjs', 'src/**/*.mjs'],
  coveragePathIgnorePatterns: ['__fixtures__', '__tests__', 'seeders'],
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'test-reports',
      outputName: 'jest-junit.xml',
    } ]
  ],

  testResultsProcessor: 'jest-sonar-reporter'
}
