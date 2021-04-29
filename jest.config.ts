const jestConfig = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts*'],
  coveragePathIgnorePatterns: [
    'index\\.tsx?$',
    '\\.d\\.ts$',
    '<rootDir>/src/components/Icons',
    '<rootDir>/src/components/Logos'
  ],
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/test-coverage/',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/resources/test-setup/styleMock.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/src/resources/test-setup/setupEnzyme.ts']
};

export default jestConfig;
