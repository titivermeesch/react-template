module.exports = {
  verbose: true,
  bail: 5,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  errorOnDeprecated: true,
  notify: true,
  testEnvironment: 'node',
}
