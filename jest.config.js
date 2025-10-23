export default {
  preset: null,
  testEnvironment: 'node',
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$',
  },
  transformIgnorePatterns: ['node_modules/(?!(supertest)/)'],
}
