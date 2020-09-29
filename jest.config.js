module.exports = {
  testEnvironment: 'jsdom',
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|less)$': 'jest-css-modules-transform'
  }
}
