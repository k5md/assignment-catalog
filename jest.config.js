module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: [
    '<rootDir>/setupEnzyme.ts'
  ],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
}