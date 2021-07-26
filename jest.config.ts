const jestConfig = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/components/Docs/**',
    '!src/documentation/**',
    '!src/main.tsx'
  ],
  coveragePathIgnorePatterns: ['index\\.tsx?$', '\\.d\\.ts$'],
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
    '.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/test-setup/setup.ts']
};

export default jestConfig;
