module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ["/node_modules/(?!vuetify)"],
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest"
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: 'jsdom',
  automock: false,
  resetMocks: false,
  setupFiles: [
    './setupJest.js'
  ]
}