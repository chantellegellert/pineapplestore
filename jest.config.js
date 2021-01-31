module.exports = {
  preset: "ts-jest",
  testMatch: [
    "<rootDir>/tests/unit/*.spec.(js|jsx|ts|tsx)",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,ts,vue}",
    "!src/plugins/*.{js,ts,vue}",
    "!src/*.{js,ts}",
  ],
  coverageDirectory: "coverage/pineapplestore",
  testResultsProcessor: "jest-junit",
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
    "^.+\\.(vue)$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!(ag-grid-vue))"],
  globals: {
    "ts-jest": {
      tsconfig: {
        allowJs: true,
      },
    },
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
};
