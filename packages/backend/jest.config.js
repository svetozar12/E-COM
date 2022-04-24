module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["clover", "json", "lcov", "text"],
};
